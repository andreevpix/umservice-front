<template>
  <NuxtLink to="/" class="logo">
    <span v-html="color ? logo : logoGray" class="logo__img"></span>
    <span :class="color ? 'logo__text logo__text_gradient' : 'logo__text'">Умный сервис</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import logo from '~/assets/img/logo.svg?raw'
import logoGray from '~/assets/img/logo-gray.svg?raw'

defineProps({
  color: Boolean
})
</script>

<style lang="scss">
  .logo {
    display: flex;
    align-items: center;

    text-decoration: none;

    &__img {
      width: 25px;
      height: 25px;

      margin-inline-end: 8px;
    }

    &__text {
      font-size: 18px;
      font-weight: 600;
      text-transform: uppercase;
      line-height: 1;
    }

    &__text_gradient {
      font-size: 16px;
      @include gradientText;
    }
  }
</style>
