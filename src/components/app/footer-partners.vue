<template>
  <div class="footer_partners">
    <NuxtImg class="footer_partners__img" src="/img/partners/mintsifry.png" />
    <p class="footer_partners__description">
      {{ "Компания входит в реестр\nаккредитованных IT - компаний" }}
    </p>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss">
.footer_partners {
  &__img {
    width: 179px;
    min-width: 179px;
    margin-block-end: 9px;
  }

  &__description {
    font-size: 12px;
    font-weight: 500;

    white-space: break-spaces;
  }
}
</style>
