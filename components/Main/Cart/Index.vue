<template>
  <div>
    <MainCartHeading />
    <div class="mainCard__wrapper" v-if="store.cartItems.length > 0">
      <MainCartCard v-for="(item, index) in store.cartItems" :index="index" :info="item" :key="item.title" />
    </div>
    <div class="mainCard__wrapper-empty" v-else>
      <h1 class="text-heading text-black">Здесь пока нет товаров</h1>
    </div>
    <MainCartCheckbox />
  </div>
</template>

<script setup>
import {useStore} from '~/store/store';

const store = useStore();
</script>

<style scoped>
.mainCard__wrapper-empty {
  height: 467px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mainCard__wrapper {
  margin-bottom: 52px;
  height: 416px;
  padding-right: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 10px;
  }
  & div {
    margin-bottom: 26px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
}
</style>
