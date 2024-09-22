<template>
  <div class="footer__wrapper">
    <h3 class="text-black footer__text">Просмотренные товары</h3>

    <div class="footer__right">
      <button class="footer__button-left" @click="if (store.currentSlide > 1) {store.currentSlide--; $emit('changeSlide')}">
        <img src="~assets/svg/slider-arrow.svg" alt="arrow" />
      </button>

      <div class="footer__button__text">
        <h3 class="footer__button__text-active black-text">{{ store.currentSlide }}&nbsp;</h3>
        <p class="footer__button__text-passive gray-text">/ 6</p>
      </div>

      <button @click="if (store.currentSlide < 6) {store.currentSlide++; $emit('changeSlide')}">
        <img src="~assets/svg/slider-arrow.svg" alt="arrow" />
      </button>
    </div>
  </div>
</template>

<script setup>

import {useStore} from '~/store/store';
const store = useStore();

const emit = defineEmits(['changeSlide']);
</script>

<style scoped>
.footer__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 104px;
}
.footer__text {
  font-family: 'Lato', sans-serif;
  font-size: 30px;
  font-weight: 600;
  line-height: 36.16px;
}
.footer__right {
  display: flex;
  align-items: center;
}
.footer__button-left {
  rotate: 180deg;
}
.footer__button__text {
  display: flex;
  align-items: flex-end;
  margin: 0 16px;
}
.footer__button__text-active {
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  text-align: left;
}
.footer__button__text-passive {
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 34px;
}
</style>
