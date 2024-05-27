<template>
  <div class="route">
    <div class="container">
      <div class="route_wrapper">
        <div class="route_data">
          <p class="route_data__info">
            <span class="route_data__info_icon">
              <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0484 11.6C22.0484 12.9508 21.4531 14.6612 20.4409 16.5489C19.442 18.4118 18.098 20.3372 16.7354 22.0883C15.3755 23.8358 14.0132 25.3892 12.9895 26.5067C12.6055 26.926 12.2698 27.2831 12.0007 27.5654C11.7317 27.2831 11.396 26.926 11.012 26.5067C9.98833 25.3892 8.62598 23.8358 7.26613 22.0883C5.90347 20.3372 4.55951 18.4118 3.56061 16.5489C2.54839 14.6612 1.95312 12.9508 1.95312 11.6C1.95312 5.69924 6.49701 1 12.0007 1C17.5045 1 22.0484 5.69924 22.0484 11.6Z" stroke="#0099A3" stroke-width="2"/>
                <circle cx="12.0003" cy="11.0472" r="3.14286" stroke="#0099A3" stroke-width="2"/>
              </svg>
            </span>
            <span class="route_data__info_text">{{ 'г.Москва, 1 - й Магистральный проезд,\nд. 11, стр. 5' }}</span>
          </p>
          <p class="route_data__info">
            <span class="route_data__info_icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V11.6712C12 11.8022 11.9397 11.9258 11.8364 12.0063L8 15" stroke="#0099A3" stroke-width="2"/>
                <circle cx="12" cy="12" r="11" stroke="#0099A3" stroke-width="2"/>
              </svg>
            </span>
            <span class="route_data__info_text">{{ 'Пн-пт: с 9:00 до 18:00\nСб-вс: выходной' }}</span>
          </p>

          <span class="route_data__title">Как добраться</span>
          <span class="route_data__note">Пешком и транспортом</span>

          <ul class="route_data__metro">
            <li class="route_data__metro_item">
              <span class="route_data__metro_icon"
                style="background: #7949A4"
              >
                M
              </span>
              <span class="route_data__metro_name">Беговая</span>
              <p class="route_data__metro_distance">
                <svg class="route_data__metro_distance_icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.47596 3.2787C9.10096 3.3287 9.65096 2.8537 9.70096 2.2287C9.75096 1.6037 9.28846 1.0537 8.65096 1.0037C8.02596 0.953699 7.47596 1.4162 7.42596 2.0537C7.38846 2.6787 7.85096 3.2287 8.47596 3.2787Z" fill="black"/>
                  <path d="M7.5139 3.74099C7.7389 3.59099 8.0139 3.47849 8.3139 3.50349C8.7014 3.54099 9.0264 3.77849 9.2264 4.07849L10.3764 6.35349L11.9389 7.44099C12.0764 7.54099 12.1514 7.71599 12.1389 7.89099C12.1139 8.17849 11.8639 8.37849 11.5889 8.36599C11.5014 8.36599 11.4389 8.32849 11.3514 8.29099L9.6389 7.11599C9.5889 7.06599 9.5389 7.01599 9.5139 6.96599L9.0889 6.11599L8.5639 8.36599L10.5889 10.7535C10.6389 10.8285 10.6639 10.916 10.6889 11.0035L11.2389 13.891C11.2389 13.9535 11.2514 13.991 11.2389 14.0535C11.2014 14.4785 10.8389 14.791 10.4014 14.766C10.0514 14.741 9.7889 14.4785 9.7014 14.1535L9.1889 11.441L7.5514 9.64099L7.1639 11.391C7.1514 11.4785 7.0389 11.641 7.0139 11.716L5.4389 14.3785C5.2764 14.6285 5.0139 14.7785 4.7139 14.7535C4.2889 14.716 3.9764 14.3535 4.0014 13.916C4.0139 13.791 4.0639 13.666 4.1014 13.591L5.5639 11.1285L6.7764 5.71599L5.9764 6.36599L5.5514 8.29099C5.5014 8.54099 5.2764 8.74099 5.0014 8.71599C4.7264 8.69099 4.5014 8.45349 4.5264 8.16599C4.5264 8.14099 4.5389 8.11599 4.5389 8.10349L5.0389 5.85349C5.0639 5.75349 5.1264 5.66599 5.2014 5.60349L7.5139 3.74099Z" fill="black"/>
                </svg>
                <span class="route_data__metro_distance_text">1.86 км</span>
              </p>
            </li>
            <li class="route_data__metro_item">
              <span class="route_data__metro_icon"
                style="background: #70B0B1"
              >
                M
              </span>
              <span class="route_data__metro_name">Шелепиха</span>
              <p class="route_data__metro_distance">
                <svg class="route_data__metro_distance_icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.47596 3.2787C9.10096 3.3287 9.65096 2.8537 9.70096 2.2287C9.75096 1.6037 9.28846 1.0537 8.65096 1.0037C8.02596 0.953699 7.47596 1.4162 7.42596 2.0537C7.38846 2.6787 7.85096 3.2287 8.47596 3.2787Z" fill="black"/>
                  <path d="M7.5139 3.74099C7.7389 3.59099 8.0139 3.47849 8.3139 3.50349C8.7014 3.54099 9.0264 3.77849 9.2264 4.07849L10.3764 6.35349L11.9389 7.44099C12.0764 7.54099 12.1514 7.71599 12.1389 7.89099C12.1139 8.17849 11.8639 8.37849 11.5889 8.36599C11.5014 8.36599 11.4389 8.32849 11.3514 8.29099L9.6389 7.11599C9.5889 7.06599 9.5389 7.01599 9.5139 6.96599L9.0889 6.11599L8.5639 8.36599L10.5889 10.7535C10.6389 10.8285 10.6639 10.916 10.6889 11.0035L11.2389 13.891C11.2389 13.9535 11.2514 13.991 11.2389 14.0535C11.2014 14.4785 10.8389 14.791 10.4014 14.766C10.0514 14.741 9.7889 14.4785 9.7014 14.1535L9.1889 11.441L7.5514 9.64099L7.1639 11.391C7.1514 11.4785 7.0389 11.641 7.0139 11.716L5.4389 14.3785C5.2764 14.6285 5.0139 14.7785 4.7139 14.7535C4.2889 14.716 3.9764 14.3535 4.0014 13.916C4.0139 13.791 4.0639 13.666 4.1014 13.591L5.5639 11.1285L6.7764 5.71599L5.9764 6.36599L5.5514 8.29099C5.5014 8.54099 5.2764 8.74099 5.0014 8.71599C4.7264 8.69099 4.5014 8.45349 4.5264 8.16599C4.5264 8.14099 4.5389 8.11599 4.5389 8.10349L5.0389 5.85349C5.0639 5.75349 5.1264 5.66599 5.2014 5.60349L7.5139 3.74099Z" fill="black"/>
                </svg>
                <span class="route_data__metro_distance_text">1.9 км</span>
              </p>
            </li>
            <li class="route_data__metro_item">
              <span class="route_data__metro_icon"
                style="background: #70B0B1"
              >
                M
              </span>
              <span class="route_data__metro_name">Хорошёвская</span>
              <p class="route_data__metro_distance">
                <svg class="route_data__metro_distance_icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.47596 3.2787C9.10096 3.3287 9.65096 2.8537 9.70096 2.2287C9.75096 1.6037 9.28846 1.0537 8.65096 1.0037C8.02596 0.953699 7.47596 1.4162 7.42596 2.0537C7.38846 2.6787 7.85096 3.2287 8.47596 3.2787Z" fill="black"/>
                  <path d="M7.5139 3.74099C7.7389 3.59099 8.0139 3.47849 8.3139 3.50349C8.7014 3.54099 9.0264 3.77849 9.2264 4.07849L10.3764 6.35349L11.9389 7.44099C12.0764 7.54099 12.1514 7.71599 12.1389 7.89099C12.1139 8.17849 11.8639 8.37849 11.5889 8.36599C11.5014 8.36599 11.4389 8.32849 11.3514 8.29099L9.6389 7.11599C9.5889 7.06599 9.5389 7.01599 9.5139 6.96599L9.0889 6.11599L8.5639 8.36599L10.5889 10.7535C10.6389 10.8285 10.6639 10.916 10.6889 11.0035L11.2389 13.891C11.2389 13.9535 11.2514 13.991 11.2389 14.0535C11.2014 14.4785 10.8389 14.791 10.4014 14.766C10.0514 14.741 9.7889 14.4785 9.7014 14.1535L9.1889 11.441L7.5514 9.64099L7.1639 11.391C7.1514 11.4785 7.0389 11.641 7.0139 11.716L5.4389 14.3785C5.2764 14.6285 5.0139 14.7785 4.7139 14.7535C4.2889 14.716 3.9764 14.3535 4.0014 13.916C4.0139 13.791 4.0639 13.666 4.1014 13.591L5.5639 11.1285L6.7764 5.71599L5.9764 6.36599L5.5514 8.29099C5.5014 8.54099 5.2764 8.74099 5.0014 8.71599C4.7264 8.69099 4.5014 8.45349 4.5264 8.16599C4.5264 8.14099 4.5389 8.11599 4.5389 8.10349L5.0389 5.85349C5.0639 5.75349 5.1264 5.66599 5.2014 5.60349L7.5139 3.74099Z" fill="black"/>
                </svg>
                <span class="route_data__metro_distance_text">1.93 км</span>
              </p>
            </li>
          </ul>

          <span class="route_data__note">На автомобиле</span>

          <NuxtLink class="route_data__link" to="#">Адрес отправления</NuxtLink>
        </div>
        <div class="route_map">
          <yandex-map
            :settings="{
              location: {
                center: [37.526933, 55.765403],
                zoom: 17,
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
              coordinates: [37.526980, 55.765513],
              title: 'Умный сервис ⭐4,8',
              subtitle: 'До 18:00'
            }"
            />
          </yandex-map>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  YandexMap,
  YandexMapControls, YandexMapDefaultFeaturesLayer, YandexMapDefaultMarker,
  YandexMapDefaultSchemeLayer, YandexMapGeolocationControl, YandexMapMarker, YandexMapScaleControl,
  YandexMapZoomControl,
} from "vue-yandex-maps";
</script>

<style lang="scss">
.route {
  margin-block-end: 36px;
}

.route_wrapper {
  display: flex;

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

  &__metro {
    margin-block-end: 24px;
  }

  &__metro_item {
    display: flex;
    align-items: center;

    &:not(:last-of-type) {
      margin-block-end: 16px;
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
    margin-inline-end: 5px;
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

  &__link {
    display: inline-block;

    padding-block-start: 13px;
    padding-block-end: 13px;
    padding-inline-start: 16px;
    padding-inline-end: 98px;

    border: 1px solid $green;
    border-radius: 8px;

    color: $green;
    text-decoration: none;

    transition: .2s ease-in-out;

    &:hover {
      color: white;

      background: $green;
    }
  }
}
.route_map {
  display: flex;

  width: 64.5%;

  border-radius: 16px;
}
</style>
