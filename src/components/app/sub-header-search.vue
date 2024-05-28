<template>
  <div class="subheader_search">
    <div class="subheader_search_container">
      <a-input
        v-model:value="value"
        placeholder="Терминал сбора данных"
        type="text"
        class="subheader_search__input"
        prefix="input"
      />
      <button class="subheader_search__submit" type="button">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11 12L14 15" stroke="white" />
          <circle cx="7.5" cy="7.5" r="6" stroke="white" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref<string>("");
</script>

<style lang="scss">
.subheader_search_container {
  min-width: 310px;

  padding-block-start: 1px;
  padding-block-end: 1px;
  padding-inline-start: 1px;
  background: $green;
  border-radius: 5px;

  position: relative;
}
.subheader_search {
  &__input {
    width: calc(100% - 40px);

    padding-block-start: 4px !important;
    padding-block-end: 5px !important;
    padding-inline-start: 14px !important;

    border-radius: 5px !important;

    position: relative;

    &,
    &::placeholder {
      @include font-montserrat(500, important);
      font-size: 14px !important;
      line-height: 1 !important;
      color: #9a9a9a !important;
    }

    &:hover,
    &:focus,
    &:focus-visible,
    &:focus-within {
      border-color: $green !important;
    }
  }

  &__submit {
    width: 40px;
    height: 100%;

    margin: 0;
    padding: 0;

    border: none;
    outline: none;
    background: $green;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    line-height: 0.2;

    position: absolute;
    top: 0;
    right: 0;

    cursor: pointer;
  }
}
</style>
