<template>
  <div class="footer">
    <div class="container">
      <div class="footer_top">
        <AppFooterMenu />
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
</style>
