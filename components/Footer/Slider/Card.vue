<template>
  <div class="card__wrapper blue-background">
    <div class="top">
      <NuxtImg :src="`/images/${info.img}.png`" class="card__img" />
      <h3 class="black-text">{{ info.title }}</h3>
      <p class="text-basic black-text">{{ info.discription }}</p>
    </div>
    <div class="bottom">
      <h3 class="black__text">{{ info.minPrice }} ₽ – {{ info.maxPrice }} ₽</h3>
      <p class="text-big gray-text">{{ info.minPriceEur }} € – {{ info.maxPriceEur }} €</p>
      <UIButton>Подробнее</UIButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  info: Object,
});
</script>

<style scoped>
.card__wrapper {
  width: 305px;
  height: 563px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: default;
  margin-right: 20px;
}
.card__img {
  width: 245px;
  height: 245px;
}
.top {
  display: flex;
  flex-direction: column;
}
.bottom {
  display: flex;
  flex-direction: column;
}
.top h3 {
  font-family: 'Lato', sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 26.51px;
  margin-top: 5px;
  margin-bottom: 9px;
  align-self: flex-start;
}
.top p {
  text-align: start;
}
.bottom h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: 600;
  line-height: 28.6px;
  letter-spacing: 0.005em;
  align-self: flex-start;
}
.bottom p {
  font-weight: 500;
  margin-top: 3px;
  margin-bottom: 20px;
  align-self: flex-start;
}
</style>
