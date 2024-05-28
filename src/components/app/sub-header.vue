<template>
  <div class="subheader">
    <div class="container subheader_container">
      <AppSubHeaderMenu />
      <AppSubHeaderSearch />
    </div>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
.subheader {
  border-bottom: 1px solid #d9d9d9;
}
.subheader_container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-block-start: 16px;
  padding-block-end: 17px;
}
</style>
