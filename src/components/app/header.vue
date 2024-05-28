<template>
  <div class="header">
    <div class="container">
      <div class="header_left">
        <AppLogo :color="true" />
        <AppHeaderMenu />
      </div>
      <div class="header_right">
        <AppHeaderPanel />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.header .container,
.header_left,
.header_right {
  display: flex;
  align-items: center;
}

.header {
  background: #1f1e1e;

  & .container {
    justify-content: space-between;

    padding-block-start: 15px;
    padding-block-end: 15px;
  }
}

.header_left {
  column-gap: 33px;
}
</style>
