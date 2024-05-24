<template>
  <div class="logo">
    <img class="logo__img" src="../../assets/img/logo.svg">
    <span class="logo__text">Умный сервис</span>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
  .logo {
    display: flex;
    align-items: center;

    &__img {
      width: 25px;
      height: 25px;

      margin-inline-end: 8px;
    }

    &__text {
      text-transform: uppercase;
      line-height: 1;
      @include gradientText;
    }
  }
</style>
