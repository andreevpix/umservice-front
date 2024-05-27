<template>
  <div class="footer">
    <div class="container footer_container">
      <div class="footer_top">
        <div class="footer__left">
          <AppFooterMenu />
        </div>
        <div class="footer__right">
          <AppFooterSubscribe />
        </div>
      </div>
      <div class="footer_bottom">
        <div class="footer__left">
          <AppFooterCompany />
          <AppFooterPartners />
        </div>
        <div class="footer__right">
          <AppFooterRating />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>

<style lang="scss" scoped>
.footer {
  margin-block-start: 64px;

  background: $greenPastel;

  &__left {
    display: flex;
    align-items: center;
  }

  &__left {
    width: 70%;
  }

  &__right {
    width: 30%;
  }
}

.footer_container {
    padding-block-start: 30px;
    padding-block-end: 22px;
}

.footer_top {
  display: flex;
  justify-content: space-between;
  column-gap: 200px;

  padding-block-end: 32px;

  border-bottom: .5px #ccc solid;
}

.footer_bottom {
  display: flex;
  align-items: center;
  column-gap: 200px;

  padding-block-start: 17px;
}
</style>
