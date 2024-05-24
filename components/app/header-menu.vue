<template>
  <ul class="header_menu">
    <li class="header_menu__item" v-for="menuItem in menu">
      <NuxtLink :to="menuItem.link">
        {{menuItem.name}}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
// Types
import type {THeaderMenuResponse} from "~/types";

const menu = ref<THeaderMenuResponse[] | null>();

const fetchMenu = async () => {
  const { data } = await useFetch('/api/header-menu');
  Object.assign(menu, {
    value: data.value
  })
}

fetchMenu()
</script>

<style lang="scss">
.header_menu {
  display: flex;
  column-gap: 32px;

  &__item {
    font-size: 14px;
    font-weight: 500;
    color: white;

    position: relative;
    top: 0;

    transition: .2s ease-in-out;

    &:hover {
      top: -2px;
    }
  }

  &__item a {
    text-decoration: none;
  }
}
</style>
