<template>
  <div class="heading__wrapper">
    <div class="heading__left">
      <h1 class="text-heading black-text">Ваша корзина</h1>
      <p class="gray-text text-bigger">{{ store.count }} товара</p>
    </div>
    <button class="gray-text text-basic text-basic-underline" @click="store.cartItems = []">Отчистить корзину</button>
  </div>
</template>

<script setup>
import {useStore} from '~/store/store';
const store = useStore();
</script>

<style scoped>
.heading__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 55px;
  cursor: default;
  & button {
    line-height: 32px;
  }
}
.text-basic-underline {
  text-decoration: underline;
  text-underline-offset: 3px;
  &:hover {
    color: black;
  }
}
.heading__left {
  display: flex;
  align-items: flex-end;
  gap: 28px;
  & p {
    line-height: 34px;
  }
}
</style>
