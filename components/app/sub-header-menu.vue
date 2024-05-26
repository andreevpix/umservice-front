<template>
  <ul class="subheader_menu">
    <li class="subheader_menu__item" v-for="menuItem in dataMenu">
      <NuxtLink :to="menuItem.link">
        {{menuItem.name}}
      </NuxtLink>
      <span class="subheader_menu__item_icon">
        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0006 0.656854L6.34375 6.31371L0.686896 0.656854" stroke="#141212"/>
        </svg>
      </span>
    </li>
  </ul>
</template>

<script setup lang="ts">
// Types
import type {TSubMenuResponse} from "../../types";

const dataMenu = ref<TSubMenuResponse[]>([
  {
    id: 1,
    name: 'Оборудование',
    link: '#',
  },
  {
    id: 2,
    name: 'Отраслевые решения',
    link: '#',
  },
  {
    id: 3,
    name: 'Сервис и ремонт',
    link: '#',
  },
  {
    id: 4,
    name: 'Компания',
    link: '#',
  },
  {
    id: 5,
    name: 'Медиацентр',
    link: '#',
  },
])
</script>

<style lang="scss">
.subheader_menu {
  display: flex;
  column-gap: 32px;

  &__item {
    display: flex;
    align-items: center;

    cursor: pointer;
  }

  &__item a {
    font-size: 14px;
    font-weight: 500;
    color: #141212;
    text-decoration: none;
  }

  &__item_icon {
    margin-block-start: 2px;
    margin-inline-start: 8px;
  }

  &__item_icon svg {
    width: 12px;
  }
}
</style>
