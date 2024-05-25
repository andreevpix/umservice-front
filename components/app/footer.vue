<template>
  <div class="footer">
    <div class="container">
      <div class="footer_top">
        <AppFooterMenu />
        <AppFooterSubscribe />
      </div>
      <div class="footer_bottom">

      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>

<style lang="scss" scoped>
.footer {
  background: $greenPastel;

  & .container {
    padding-block-start: 30px;
    padding-block-end: 22px;
  }
}

.footer_top {
  display: flex;
  justify-content: space-between;
  column-gap: 200px;
}
</style>
