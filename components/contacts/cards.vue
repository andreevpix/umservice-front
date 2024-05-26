<template>
  <div class="container cards_container">
    <ul class="cards_list">
      <li class="cards_list__item"></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.cards_container {
  padding-block-end: 8px;
}
.cards_list {
  display: flex;

  &__item {
    width: calc(100% / 3);
  }
}
</style>
