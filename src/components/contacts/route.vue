<template>
  <div class="route">
    <div class="container">
      <div class="route_wrapper">
        <div class="route_data">
          <p class="route_data__info">
            <span class="route_data__info_icon">
              <svg
                width="24"
                height="29"
                viewBox="0 0 24 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0484 11.6C22.0484 12.9508 21.4531 14.6612 20.4409 16.5489C19.442 18.4118 18.098 20.3372 16.7354 22.0883C15.3755 23.8358 14.0132 25.3892 12.9895 26.5067C12.6055 26.926 12.2698 27.2831 12.0007 27.5654C11.7317 27.2831 11.396 26.926 11.012 26.5067C9.98833 25.3892 8.62598 23.8358 7.26613 22.0883C5.90347 20.3372 4.55951 18.4118 3.56061 16.5489C2.54839 14.6612 1.95312 12.9508 1.95312 11.6C1.95312 5.69924 6.49701 1 12.0007 1C17.5045 1 22.0484 5.69924 22.0484 11.6Z"
                  stroke="#0099A3"
                  stroke-width="2"
                />
                <circle
                  cx="12.0003"
                  cy="11.0472"
                  r="3.14286"
                  stroke="#0099A3"
                  stroke-width="2"
                />
              </svg>
            </span>
            <span class="route_data__info_text">{{
              "г.Москва, 1 - й Магистральный проезд,\nд. 11, стр. 5"
            }}</span>
          </p>
          <p class="route_data__info">
            <span class="route_data__info_icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V11.6712C12 11.8022 11.9397 11.9258 11.8364 12.0063L8 15"
                  stroke="#0099A3"
                  stroke-width="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="#0099A3"
                  stroke-width="2"
                />
              </svg>
            </span>
            <span class="route_data__info_text">{{
              "Пн-пт: с 9:00 до 18:00\nСб-вс: выходной"
            }}</span>
          </p>

          <span class="route_data__title">Как добраться</span>
          <span class="route_data__note">Пешком и транспортом</span>

          <ul class="route_data__metro">
            <li
              v-for="metro in dataMetro"
              :key="metro.id"
              class="route_data__metro_item"
            >
              <NuxtLink :to="metro.linkRoute" target="_blank">
                <span
                  class="route_data__metro_icon"
                  :style="{ background: metro.color }"
                >
                  M
                </span>
                <span class="route_data__metro_name">{{ metro.name }}</span>
                <p class="route_data__metro_distance">
                  <NuxtImg
                    class="route_data__metro_distance_icon"
                    src="/img/contacts-route/pedestrian.svg"
                  />
                  <span class="route_data__metro_distance_text">
                    {{ metro.distance }}
                  </span>
                </p>
              </NuxtLink>
            </li>
          </ul>

          <span class="route_data__note">На автомобиле</span>

          <div class="route_data__input_wrapper">
            <a-input
              v-model:value="reqAddress"
              placeholder="Адрес отправления"
              type="text"
              class="route_data__input"
              prefix="input"
            >
              <template #suffix>
                <LoadingOutlined
                  v-if="isLoading"
                  class="route_data__input_loading"
                />
                <NuxtLink
                  v-else
                  :to="linkToTheRoute || '#'"
                  class="route_data__input_submit"
                  target="_blank"
                >
                  <NodeIndexOutlined />
                </NuxtLink>
              </template>
            </a-input>
            <ul v-if="suggestions.length" class="route_data__input_result">
              <li
                v-for="(suggestion, index) in suggestions"
                :key="index"
                class="route_data__input_result_item"
                @click="
                  setAddress(suggestion.value, {
                    lon: suggestion.data.geo_lon,
                    lat: suggestion.data.geo_lat,
                  })
                "
              >
                {{ suggestion.value }}
              </li>
            </ul>
          </div>
        </div>
        <div class="route_map">
          <yandex-map
            :settings="{
              location: {
                center: [37.526982, 55.765513], // starting position [lng, lat]
                zoom: 17, // starting zoom
              },
            }"
            height="462px"
            :cursor-grab="true"
          >
            <yandex-map-default-features-layer />
            <yandex-map-default-scheme-layer />

            <yandex-map-controls :settings="{ position: 'right' }">
              <yandex-map-zoom-control />
              <yandex-map-scale-control />
              <yandex-map-geolocation-control />
            </yandex-map-controls>

            <yandex-map-default-marker
              :settings="{
                coordinates: [37.526982, 55.765513],
                title: 'Умный сервис ⭐4,8',
                subtitle: 'До 18:00',
                draggable: false,
              }"
            />
          </yandex-map>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Core
import {
  YandexMap,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  YandexMapDefaultSchemeLayer,
  YandexMapGeolocationControl,
  YandexMapScaleControl,
  YandexMapZoomControl,
} from "vue-yandex-maps";
import { ref, watch } from "vue";
import debounce from "lodash/debounce";
import { LoadingOutlined } from "@ant-design/icons-vue";

// Types
import type {
  TDadataAddress,
  TDadataAddressSuggestionResponse,
} from "~/types/services-dadata";
import type { TContactsRouteGeo, TContactsRouteMetro } from "~/types/contacts";

// Initialization constants
const reqAddress = ref("");
const suggestions = ref<TDadataAddress[]>([]);
const linkToTheRoute = ref("");
const submitAddress = ref<boolean>(false);
const isLoading = ref<boolean>(false);

// Initial Data
const dataMetro = [
  {
    id: 1,
    name: "Беговая",
    linkRoute: "https://yandex.ru/maps/-/CDbvmF9l",
    color: "#7949A4",
    distance: "1.86 км",
  },
  {
    id: 2,
    name: "Шелепиха",
    linkRoute: "https://yandex.ru/maps/-/CDbvmVyy",
    color: "#70B0B1",
    distance: "1.9 км",
  },
  {
    id: 3,
    name: "Хорошёвская",
    linkRoute: "https://yandex.ru/maps/-/CDbvmCM7",
    color: "#70B0B1",
    distance: "1.93 км",
  },
] as TContactsRouteMetro[];

// Callbacks
const setAddress = (address: string, geo: TContactsRouteGeo) => {
  reqAddress.value = address;
  suggestions.value = [];
  submitAddress.value = true;
  linkToTheRoute.value = `https://yandex.ru/maps/?ll=${geo.lon}%2C${geo.lat}&mode=routes&routes%5BactiveComparisonMode%5D=auto&rtext=${geo.lat}%2C${geo.lon}~55.765513%2C37.526983&rtt=comparison&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D124354844888&utm_source=share&z=15.04`;
};

const fetchAddressSuggestions = debounce(async () => {
  isLoading.value = true;

  const { data, error } = await useFetch<TDadataAddressSuggestionResponse>(
    "/api/service/get-address",
    {
      method: "POST",
      body: { query: reqAddress.value },
    },
  );

  if (!error.value && data.value) {
    suggestions.value = data.value.suggestions;
  } else {
    console.error("Error fetching suggestions:", error.value);
  }

  isLoading.value = false;
}, 1500);

// Watcher (useEffect)
watch(reqAddress, () => {
  if (!submitAddress.value) {
    isLoading.value = true;
    fetchAddressSuggestions()?.finally(() => {
      isLoading.value = false;
    });
  }

  submitAddress.value = false;
});
</script>

<style lang="scss">
.route {
  margin-block-end: 36px;
}

.route_wrapper {
  display: flex;
  column-gap: 50px;

  padding-block-start: 32px;
  padding-block-end: 32px;
  padding-inline-start: 32px;
  padding-inline-end: 32px;

  border-radius: 16px;
  border: 1px solid #ccc;
}
.route_data {
  width: 35.5%;

  &__title,
  &__note {
    display: block;

    margin-block-end: 16px;
  }

  &__title {
    font-size: 20px;
    font-weight: 600;
  }

  &__note {
    font-size: 16px;
    font-weight: 500;
    color: $green;
  }

  &__input {
    margin-block-end: 20px !important;
    padding-block-start: 13px !important;
    padding-block-end: 13px !important;
    padding-inline-start: 16px !important;

    border-color: $green !important;

    &,
    & > * {
      @include font-montserrat(500, important);
      font-size: 16px !important;
      line-height: 1 !important;
      color: $green !important;
    }
  }

  &__input_wrapper {
    position: relative;
  }

  &__input_submit {
    border: none;
    outline: none;
    background: none;

    cursor: pointer;

    & svg {
      fill: $green;
    }
  }

  &__input_result {
    max-height: 200px;

    padding-block-start: 8px;
    padding-block-end: 8px;
    padding-inline-start: 8px;
    padding-inline-end: 8px;

    border: 1px solid $green;
    border-radius: 8px;
    background: #fff;

    position: absolute;
    top: 90%;
    left: 0;
    right: 0;

    overflow-y: auto;

    z-index: 10;
  }

  &__input_result_item {
    padding-block-start: 12px;
    padding-block-end: 12px;
    padding-inline-start: 8px;
    padding-inline-end: 8px;

    border-radius: 0;
    background: white;

    cursor: pointer;

    transition: 0.2s ease-in-out;

    &:hover {
      background: $green;
      border-radius: 8px;

      color: white;
    }

    &:not(:last-of-type) {
      border-bottom: 1px solid $green;
    }
  }

  &__metro {
    margin-block-end: 24px;
  }

  &__metro_item {
    width: max-content;

    padding-inline-end: 10px;

    border-radius: 3.5px;

    cursor: pointer;

    transition: 0.2s ease-in-out;

    &:hover {
      background: $green;

      color: white;
    }

    &:not(:last-of-type) {
      margin-block-end: 16px;
    }

    & a {
      display: flex;
      align-items: center;

      font-size: 16px;
      font-weight: 500;
      text-decoration: none;
    }
  }

  &__metro_icon {
    display: block;

    width: 32px;
    height: 32px;

    margin-inline-end: 17px;
    padding-block-start: 6.5px;
    padding-block-end: 6.5px;
    padding-inline-start: 6.5px;
    padding-inline-end: 6.5px;

    border-radius: 3.5px;

    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 0.9;
    color: white;

    user-select: none;
    pointer-events: none;
  }

  &__metro_distance {
    display: flex;
    align-items: center;

    margin-inline-start: 18px;
  }

  &__metro_distance_icon {
    margin-block-end: 3px;
    margin-inline-end: 5px;

    width: 16px;
    height: 16px;
  }

  &__info {
    display: flex;
    align-items: flex-start;

    &:not(:last-of-type) {
      margin-block-end: 22px;
    }

    &:last-of-type {
      margin-block-end: 32px;
    }
  }

  &__info_icon {
    width: 24px;

    margin-inline-end: 16px;
  }

  &__info_text {
    font-size: 16px;
    font-weight: 500;
    white-space: break-spaces;
    color: #141212;
  }
}
.route_map {
  display: flex;

  width: 64.5%;

  border-radius: 16px;
}
</style>
