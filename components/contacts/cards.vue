<template>
  <div class="container cards_container">
    <ul class="cards_list">
      <li
          class="cards_list__item" v-for="card in dataCards"
          :key="card.id"
      >
        <span class="cards_list__item_title">{{card.title}}</span>
        <div class="cards_list__item_data">
          <p v-for="contact in card.data"
             class="cards_list__item_data_contact"
             :key="contact.id"
          >
            <NuxtLink
              class="cards_list__item_data_contact_link"
              v-if="contact.link" :to="contact.link">{{contact.text}}</NuxtLink>
            <span v-else>
              <span
                  class="cards_list__item_data_contact_note"
                  v-if="contact.note">{{contact.note}}: </span>
              <span
                class="cards_list__item_data_contact_text"
              >
                {{contact.text}}
              </span>
            </span>
          </p>
        </div>
        <NuxtLink
            class="cards_list__item_download"
            v-if="card.document"
            :to="card.document.link"
            type="download"
            external
        >
          <span
              class="cards_list__item_download_name"
          >
            {{card.document.name}}
          </span>
          <span
              class="cards_list__item_download_icon"
              v-html="card.document.icon"
          >
          </span>
        </NuxtLink>
        <span class="cards_list__item_icon" v-html="card.icon"></span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// Types
import type {TContactsCard} from "~/types/contacts";

// Assets
import iconCardRetail from '~/assets/icons/contacts-cards/retail.svg?raw'
import iconCardCorporate from '~/assets/icons/contacts-cards/corporate.svg?raw'
import iconCardRequisites from '~/assets/icons/contacts-cards/requisites.svg?raw'
import iconCardDownload from '~/assets/icons/download.svg?raw'

const dataCards = ref<TContactsCard[]>([
  {
    id: 1,
    title: 'Розничные продажи',
    data: [
        {
          id: 1,
          text: '+7 (495) 927-95-29',
          link: 'tel:+74959279529'
        },
        {
          id: 2,
          text: 'zakaz@umserv.ru',
          link: 'mailto:zakaz@umserv.ru'
        }
    ],
    icon: iconCardRetail,
  },
    {
    id: 2,
    title: 'Корпоративные продажи',
    data: [
        {
          id: 1,
          text: '8 800 500-71-45',
          link: 'tel:+78005007145'
        },
        {
          id: 2,
          text: 'ent@umserv.ru',
          link: 'mailto:ent@umserv.ru'
        }
    ],
    icon: iconCardCorporate,
  },
    {
    id: 3,
    title: 'Реквизиты',
    data: [
        {
          id: 1,
          text: 'ООО «Умный сервис»'
        },
        {
          id: 2,
          text: '7714922363',
          note: 'ИНН'
        },
        {
          id: 3,
          text: '771401001',
          note: 'КПП'
        },
        {
          id: 4,
          text: '5137746139823',
          note: 'ОГРН'
        }
    ],
    icon: iconCardRequisites,
    document: {
      name: 'Карточка компании',
      link: '#',
      icon: iconCardDownload
    }
  }
])
</script>

<style lang="scss">
.cards_container {
  padding-block-end: 8px;
}
.cards_list {
  display: flex;
  column-gap: 10px;
  justify-content: space-between;

  &__item {
    width: calc(100% / 3);

    padding-block-start: 32px;
    padding-block-end: 32px;
    padding-inline-start: 32px;
    padding-inline-end: 32px;

    border-radius: 16px;
    border: 1px solid #ccc;

    position: relative;
  }

  &__item_title {
    display: inline-block;

    margin-block-end: 16px;

    font-size: 20px;
    font-weight: 600;
  }

  &__item_icon {
    content: '';

    display: flex;
    align-items: center;
    justify-content: center;

    width: 64px;
    height: 64px;

    position: absolute;
    bottom: 32px;
    right: 32px;
  }

  &__item_data {
    margin-block-end: 16px;
  }

  &__item_download {
    display: inline-flex;
    align-items: center;

    padding-block-start: 11px;
    padding-block-end: 11px;
    padding-inline-start: 8px;
    padding-inline-end: 10px;

    font-size: 16px;
    font-weight: 500;
    text-decoration: none;

    background: #F5F5F7;
    border-radius: 5px;

    transition: .2s ease-in-out;

    &:hover {
      background: $green;

      color: white;

      & svg path {
        stroke: white;
      }
    }
  }

  &__item_download_icon {
    margin-inline-start: 12px;

    & svg path {
      stroke: $green;

      transition: .2s ease-in-out;
    }
  }

  &__item_data_contact {
    font-size: 16px;
    font-weight: 500;

    &:not(:last-of-type) {
      margin-block-end: 4px;
    }
  }

  &__item_data_contact_link {
    text-decoration: none;
  }

  &__item_data_contact_note {
    color: #9A9A9A;
  }
}
</style>
