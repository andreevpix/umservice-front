<template>
  <div class="footer_menu">
    <div class="footer_menu_col">
      <nav
        v-for="menuList in menuLeft"
        :key="menuList.id"
        class="footer_menu_nav"
      >
        <span class="footer_menu_title">{{ menuList.title }}</span>
        <ul class="footer_menu_list">
          <li
            v-for="menuListItem in menuList.items"
            :key="menuListItem.id"
            class="footer_menu_list__item"
          >
            <NuxtLink :to="menuListItem.link">{{ menuListItem.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="footer_menu_col">
      <nav
        v-for="menuList in menuCenter"
        :key="menuList.id"
        class="footer_menu_nav"
      >
        <span class="footer_menu_title">{{ menuList.title }}</span>
        <ul class="footer_menu_list">
          <li
            v-for="menuListItem in menuList.items"
            :key="menuListItem.id"
            class="footer_menu_list__item"
          >
            <NuxtLink :to="menuListItem.link">{{ menuListItem.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="footer_menu_col">
      <nav
        v-for="menuList in menuRight"
        :key="menuList.id"
        class="footer_menu_nav"
      >
        <span class="footer_menu_title">{{ menuList.title }}</span>
        <ul class="footer_menu_list">
          <li
            v-for="menuListItem in menuList.items"
            :key="menuListItem.id"
            class="footer_menu_list__item"
          >
            <NuxtLink :to="menuListItem.link">{{ menuListItem.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TFooterMenuResponse } from "~/types";

const menuLeft = ref<TFooterMenuResponse[] | null>([
  {
    id: 1,
    title: "Оборудование",
    items: [
      {
        id: 1,
        name: "Терминалы сбора данных",
        link: "#",
      },
      {
        id: 2,
        name: "Принтеры этикеток",
        link: "#",
      },
      {
        id: 3,
        name: "Сканеры штрих-кода",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Отраслевые решения",
    items: [
      {
        id: 1,
        name: "Производство",
        link: "#",
      },
      {
        id: 2,
        name: "Логистика",
        link: "#",
      },
      {
        id: 3,
        name: "Ритейл",
        link: "#",
      },
      {
        id: 4,
        name: "Здравоохранение",
        link: "#",
      },
      {
        id: 5,
        name: "Ювелирные изделия",
        link: "#",
      },
      {
        id: 6,
        name: "Молочная отрасль",
        link: "#",
      },
    ],
  },
]);

const menuCenter = ref<TFooterMenuResponse[] | null>([
  {
    id: 1,
    title: "Сервис и ремонт",
    items: [
      {
        id: 1,
        name: "Сервисные контракты",
        link: "#",
      },
      {
        id: 2,
        name: "Ремонт ТСД",
        link: "#",
      },
      {
        id: 3,
        name: "Ремонт принтеров",
        link: "#",
      },
      {
        id: 4,
        name: "Ремонт сканеров",
        link: "#",
      },
      {
        id: 5,
        name: "Аутсорсинг IT-инфраструктуры",
        link: "#",
      },
      {
        id: 6,
        name: "Трейд-ин",
        link: "#",
      },
      {
        id: 7,
        name: "Модернизация ТСД",
        link: "#",
      },
      {
        id: 8,
        name: "Аренда ТСД",
        link: "#",
      },
    ],
  },
]);

const menuRight = ref<TFooterMenuResponse[] | null>([
  {
    id: 1,
    title: "Компания",
    items: [
      {
        id: 1,
        name: "Команда",
        link: "#",
      },
      {
        id: 2,
        name: "Партнеры",
        link: "#",
      },
      {
        id: 3,
        name: "Клиенты",
        link: "#",
      },
      {
        id: 4,
        name: "Сертификаты",
        link: "#",
      },
      {
        id: 5,
        name: "Вакансии",
        link: "#",
      },
      {
        id: 6,
        name: "Контакты",
        link: "#",
      },
      {
        id: 7,
        name: "Доставка и оплата",
        link: "#",
      },
      {
        id: 8,
        name: "Гарантийные обязательства",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Медиацентр",
    items: [
      {
        id: 1,
        name: "Новости",
        link: "#",
      },
      {
        id: 2,
        name: "Статьи",
        link: "#",
      },
      {
        id: 3,
        name: "Кейсы",
        link: "#",
      },
      {
        id: 4,
        name: "Вопрос-ответ",
        link: "#",
      },
    ],
  },
]);
</script>

<style lang="scss" scoped>
.footer_menu {
  display: flex;
  justify-content: space-between;

  width: 100%;
}

.footer_menu_nav {
  &:not(:last-of-type) {
    margin-block-end: 30px;
  }
}

.footer_menu_title {
  display: inline-block;

  margin-block-end: 15px;

  font-weight: 600;
  color: #141212;
}

.footer_menu_list {
  &__item {
    &:not(:last-of-type) {
      margin-block-end: 6px;
    }
    & a {
      @include font-montserrat(500);
      font-size: 12px;
      color: #141212;
      text-decoration: none;

      position: relative;

      &::after {
        content: "";

        width: 0;
        height: 1px;

        background: #141212;

        position: absolute;
        bottom: -2px;
        left: 0;

        transition: 0.2s ease-in-out;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
}
</style>
