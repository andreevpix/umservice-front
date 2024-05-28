<template>
  <div class="feedback">
    <div class="container feedback_container">
      <div class="feedback_head">
        <h2 class="feedback_head__title">Обратная связь</h2>
        <span class="feedback_head__description">
          {{
            "Оставьте заявку и наш специалист\nпроконсультирует Вас и поможет с выбором услуг"
          }}
        </span>
      </div>
      <form class="feedback_form">
        <span class="feedback_form__title">Оставьте заявку</span>
        <div class="feedback_form_row">
          <a-input
            v-model:value="name"
            placeholder="Имя"
            type="text"
            class="feedback_form__input"
            prefix="input"
            required
          />
          <a-input
            v-model:value="phone"
            placeholder="Телефон*"
            type="phone"
            class="feedback_form__input"
            prefix="input"
            required
          />
        </div>

        <div class="feedback_form_row">
          <a-input
            v-model:value="question"
            placeholder="Напишите Ваш вопрос"
            type="text"
            class="feedback_form__input"
            prefix="input"
            required
          />
        </div>

        <div class="feedback_form_row">
          <a-checkbox v-model:checked="checked" class="feedback_form__checkbox">
            Я соглашаюсь с
            <NuxtLink class="feedback_form__link" to="#">офертой</NuxtLink> и
            <NuxtLink class="feedback_form__link" to="#"
              >условиями обработки персональных данных</NuxtLink
            >
          </a-checkbox>
        </div>

        <button type="submit" class="feedback_form__button">
          Отправить заявку
        </button>
      </form>
      <div class="feedback_icon">
        <svg
          width="140"
          height="100"
          viewBox="0 0 140 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M74.9564 4.36014C78.357 4.3598 81.4994 6.17367 83.2 9.11848L104.072 45.2621C105.773 48.2069 105.773 51.8353 104.073 54.7804L83.2081 90.9282C81.5081 93.8733 78.366 95.6878 74.9655 95.6882L33.228 95.6923C29.8274 95.6926 26.685 93.8788 24.9844 90.934L4.11211 54.7904C2.41153 51.8455 2.41117 48.2172 4.11116 45.272L24.9763 9.12426C26.6763 6.17912 29.8184 4.36462 33.2189 4.36429L74.9564 4.36014Z"
            fill="url(#paint0_linear_439_4190)"
            fill-opacity="0.18"
          />
          <path
            d="M124.557 62.8302C125.81 62.83 126.968 63.4984 127.595 64.5834L135.077 77.5395C135.703 78.6245 135.703 79.9614 135.077 81.0465L127.598 94.0041C126.971 95.0893 125.813 95.7578 124.561 95.758L109.599 95.7595C108.346 95.7596 107.188 95.0913 106.562 94.0062L99.0799 81.0501C98.4534 79.9651 98.4532 78.6282 99.0796 77.5431L106.559 64.5855C107.185 63.5003 108.343 62.8318 109.596 62.8317L124.557 62.8302Z"
            fill="url(#paint1_linear_439_4190)"
            fill-opacity="0.18"
          />
          <defs>
            <linearGradient
              id="paint0_linear_439_4190"
              x1="82.4534"
              y1="-32.0956"
              x2="30.9975"
              y2="108.303"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#81F8BF" />
              <stop offset="0.245901" stop-color="#60F8D6" />
              <stop offset="0.428554" stop-color="#45F8EA" />
              <stop offset="0.551996" stop-color="#3AE5ED" />
              <stop offset="0.701676" stop-color="#30D5F1" />
              <stop offset="0.864851" stop-color="#19AEFA" />
              <stop offset="1" stop-color="#0B95FF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_439_4190"
              x1="127.304"
              y1="49.6863"
              x2="108.752"
              y2="100.306"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#81F8BF" />
              <stop offset="0.245901" stop-color="#60F8D6" />
              <stop offset="0.428554" stop-color="#45F8EA" />
              <stop offset="0.551996" stop-color="#3AE5ED" />
              <stop offset="0.701676" stop-color="#30D5F1" />
              <stop offset="0.864851" stop-color="#19AEFA" />
              <stop offset="1" stop-color="#0B95FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const name = ref<string>("");
    const phone = ref<string>("");
    const question = ref<string>("");
    const checked = ref<boolean>(false);
    return {
      name,
      phone,
      question,
      checked,
    };
  },
});
</script>

<style lang="scss">
.feedback {
  margin-block-start: 36px;
  margin-block-end: 64px;
}

.feedback_container {
  display: flex;
  justify-content: space-between;
}

.feedback_head {
  &__title {
    margin-block-end: 16px;

    font-size: 30px;
    font-weight: 600;
  }

  &__description {
    font-size: 14px;
    font-weight: 500;

    white-space: break-spaces;
  }
}

.feedback_form {
  width: 52%;

  padding-block-start: 32px;
  padding-block-end: 32px;
  padding-inline-start: 32px;
  padding-inline-end: 32px;

  background: #edfcff;
  border: 1px solid #b1e0e3;
  border-radius: 16px;

  &_row {
    display: flex;
    column-gap: 16px;

    &:not(:last-of-type) {
      margin-block-end: 16px;
    }

    &:last-of-type {
      margin-block-end: 36px;
    }
  }

  &__title {
    display: inline-block;

    margin-block-end: 16px;

    font-size: 20px;
    font-weight: 600;
  }

  &__input {
    padding-block-start: 13px !important;
    padding-block-end: 13px !important;
    padding-inline-start: 16px !important;

    border-color: #47bfc7 !important;
    border-radius: 10px !important;

    &,
    & > * {
      @include font-montserrat(500, important);
      font-size: 14px !important;
      line-height: 1 !important;
      color: #47bfc7 !important;
    }
  }

  &__checkbox {
    margin-block-start: 10px;

    @include font-montserrat(500, important);
    font-size: 14px !important;
    line-height: 1.2 !important;

    & .ant-checkbox {
      align-self: start !important;

      height: 16px !important;
    }

    & .ant-checkbox-inner {
      border: $green 1px solid !important;
      background: transparent;
    }

    & .ant-checkbox-checked .ant-checkbox-inner {
      background: $green !important;
    }
  }

  &__link {
    color: $green;
  }

  &__button {
    display: block;

    width: 100%;

    padding-block-start: 12px;
    padding-block-end: 12px;
    background: linear-gradient(
      89.45deg,
      #04d0dd 7.13%,
      #51d9f5 59.2%,
      #a6faff 72.81%,
      #35dae4 83.1%,
      #04d0dd 109.14%
    );
    background-size: 120% 100%;
    border-radius: 33px;
    border: none;
    outline: none;

    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color: white;

    cursor: pointer;

    transition: background-position 0.3s ease;

    &:hover {
      background-position: 350% center; /* Смещение фона вправо при наведении */
    }
  }
}

.feedback_icon {
  content: "";

  position: absolute;
  bottom: 0;
  left: 40px;
}
</style>
