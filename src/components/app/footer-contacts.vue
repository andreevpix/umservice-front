<template>
  <div class="footer_contacts">
    <div class="footer_contacts__phone_wrapper">
      <a href="tel:+74959279529" class="footer_contacts__phone"
        >8 (495) 927 95 29</a
      >
      <span class="footer_contacts__phone_name">отдел продаж</span>
    </div>
    <div class="footer_contacts__phone_wrapper">
      <a href="tel:+78005007145" class="footer_contacts__phone"
        >8 800 500 71-45</a
      >
      <span class="footer_contacts__phone_name">сервис и ремонт</span>
    </div>

    <a href="mailto:zakaz@umserv.ru" class="footer_contacts__email"
      >zakaz@umserv.ru</a
    >

    <address class="footer_contacts__address">
      {{ "г.Москва 1 - й Магистральный\nпроезд, д. 11, стр. 5" }}
    </address>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss">
.footer_contacts {
  &__phone {
    $fontSize: 20px;

    display: block;

    margin-block-end: 3px;

    font-size: $fontSize;
    font-weight: 600;
    letter-spacing: calc((0.25px * $fontSize) / 100px);
    text-decoration: none;

    &_wrapper {
      &:not(:last-of-type) {
        margin-block-end: 16px;
      }

      &:last-of-type {
        margin-block-end: 25px;
      }
    }

    &_name {
      font-size: 14px;
      font-weight: 500;
    }
  }

  &__email {
    $fontSize: 14px;

    display: block;

    margin-block-end: 16px;

    font-size: $fontSize;
    font-weight: 500;
    text-decoration: none;

    letter-spacing: calc((0.25px * $fontSize) / 100px);
  }

  &__address {
    $fontSize: 14px;

    font-size: $fontSize;
    font-style: normal;
    font-weight: 500;
    letter-spacing: calc((0.25px * $fontSize) / 100px);
    white-space: break-spaces;
  }
}
</style>
