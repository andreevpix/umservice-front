<template>
  <div class="footer_subscribe">
    <form class="footer_subscribe_form">
      <span class="footer_subscribe_form__title">Подписаться на рассылку</span>
      <a-input v-model:value="value"
               placeholder="E-mail"
               type="email"
               class="footer_subscribe_form__input_wrapper"
               prefix="input"
      >
        <template #suffix>
          <button class="footer_subscribe_form__submit" type="submit">
            <svg
                width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.656854 0.999395L6.31371 6.65625L0.656855 12.3131" stroke="#0099A3"/>
            </svg>
          </button>
        </template>
      </a-input>
      <a-checkbox v-model:checked="checked"
               class="footer_subscribe_form__checkbox"
      >
        Я соглашаюсь с <NuxtLink
          class="footer_subscribe_form__link"
          to="#">офертой</NuxtLink> и <NuxtLink
          class="footer_subscribe_form__link"
          to="#">условиями обработки персональных данных</NuxtLink>
      </a-checkbox>
    </form>
    <AppFooterSocials />
    <AppFooterContacts />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('');
    const checked = ref<boolean>(false);
    return {
      value,
      checked
    };
  },
});
</script>

<style lang="scss">
.footer_subscribe {
  max-width: 400px;
}

.footer_subscribe_form {
  margin-block-end: 28px;

  &__title {
    display: inline-block;

    margin-block-end: 15px;

    font-weight: 600;
    color: #141212;
  }

  &__input_wrapper {
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

  &__checkbox {
    @include font-montserrat(500, important);
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

  &__submit {
    margin: 0;
    padding: 0;

    border: none;
    outline: none;
    background: transparent;

    line-height: .2;

    cursor: pointer;
  }

  &__link {
    color: $green;
  }
}
</style>
