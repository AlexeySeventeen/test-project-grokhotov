<template>
  <div class="card__wrapper">
    <NuxtImg :src="`/images/${info.img}.png`" class="card__img" />

    <div class="card__main">
      <div class="top">
        <h3 class="text-big black-text">{{ info.fullTitle }}</h3>
        <img class="card__delete" src="~assets/svg/close.svg" alt="close" @click="store.cartItems.splice(index, 1)" />
      </div>

      <div class="mid">
        <p class="text-small black-text mid-text">{{ info.info }}</p>

        <div class="card__counter">
          <div>
            <button class="blue-background card__button-first" @click="countMinus">
              <img src="~assets/svg/minus.svg" alt="minus" />
            </button>
            <p class="text-basic blue-background">{{ info.count }}</p>
            <button class="blue-background card__button-last" @click="countPlus">
              <img src="~assets/svg/plus.svg" alt="plus" />
            </button>
          </div>
          <p v-if="info.count > 1" class="text-small gray-text card__counter-price">{{ info.price }} ₽/шт.</p>
        </div>

        <h3 class="card__price">{{ info.price * info.count }} ₽</h3>
      </div>

      <div class="bottom">
        <p class="text-basic gray-text">Артикул: {{ info.article }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useStore} from '~/store/store';
const store = useStore();

const props = defineProps({
  info: Object,
  index: Number,
});

function countMinus() {
  if (store.cartItems[props.index].count > 1) {
    store.cartItems[props.index].count--;
  }
}
function countPlus() {
  store.cartItems[props.index].count++;
}
</script>

<style scoped>
.card__wrapper {
  height: 121px;
  border-bottom: 1px solid #aeb0b6;
  display: grid;
  grid-template-columns: 100px 1fr;
  cursor: default;
}

.card__main {
  height: 93px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 32px;
  & div {
    display: flex;
    justify-content: space-between;
  }
}

.mid-text {
  max-width: 263px;
  margin-right: 82px;
}

.card__img {
  width: 100px;
  height: 100px;
  background: white;
  border-radius: 2px;
}
.card__counter {
  height: 34px;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  align-items: center;
  & .blue-background {
    height: 34px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.card__counter-price {
  margin-top: 12px;
}
.card__button-first {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  margin-right: 2px;
  &:hover {
    background-color: lightblue;
  }
}
.card__button-last {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  margin-left: 2px;
  &:hover {
    background-color: lightblue;
  }
}

.card__price {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  margin-left: 84px;
  margin-right: 36px;
  text-wrap: nowrap;
  align-self: center;
}
.card__delete {
  width: 12px;
  height: 12px;
  cursor: pointer;
}
</style>
