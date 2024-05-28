<template>
  <ul class="footer_socials">
    <li
      v-for="social in dataSocials"
      :key="social.id"
      class="footer_socials__item"
    >
      <NuxtLink :to="social.link">
        <span v-html="social.icon" />
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
// Types
import type { TFooterSocial } from "~/types";

// Assets
import iconSocialTelegram from "~/assets/icons/socials/telegram.svg?raw";
import iconSocialVk from "~/assets/icons/socials/vk.svg?raw";
import iconSocialDzen from "~/assets/icons/socials/dzen.svg?raw";
import iconSocialYoutube from "~/assets/icons/socials/youtube.svg?raw";

const dataSocials = ref<TFooterSocial[]>([
  {
    id: 1,
    link: "#",
    icon: iconSocialTelegram,
  },
  {
    id: 2,
    link: "#",
    icon: iconSocialVk,
  },
  {
    id: 3,
    link: "#",
    icon: iconSocialDzen,
  },
  {
    id: 4,
    link: "#",
    icon: iconSocialYoutube,
  },
]);
</script>

<style lang="scss">
.footer_socials {
  display: flex;
  column-gap: 18px;

  margin-block-end: 48px;

  &__item {
    transition: 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
