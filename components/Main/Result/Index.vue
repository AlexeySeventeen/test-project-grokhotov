<template>
  <div class="result blue-background">
    <h3 class="result__heading">Итого</h3>

    <div class="result__price">
      <div class="result__item">
        <p class="text-big black-text">Сумма заказа</p>
        <p class="text-big black-text">{{ store.price }} ₽</p>
      </div>
      <div class="result__item">
        <p class="text-big black-text">Количество</p>
        <p class="text-big black-text">{{ store.count }} шт.</p>
      </div>
      <div class="result__item">
        <p class="text-big black-text">Установка</p>
        <p class="text-big black-text">{{ installation }}</p>
      </div>
    </div>

    <div class="result__final">
      <p class="result__final-left black-text">Стоимость товаров</p>
      <p class="result__final-right black-text">{{ store.price }} ₽</p>
    </div>

    <div class="result__buttons">
      <UIButton @click="addToServer">Оформить заказ</UIButton>
      <UIButton class="result__button-white">Купить в 1 клик</UIButton>
    </div>
  </div>
</template>

<script setup>
import {useStore} from '~/store/store';

const store = useStore();
const installation = ref('Нет');

watch(
  () => store.installation,
  (newValue) => (newValue ? (installation.value = 'Да') : (installation.value = 'Нет'))
);

function addToServer() {
  const res = reactive([]);
  store.cartItems.forEach((item) => {
    res.push({
      fullTitle: item.fullTitle,
      price: item.price,
      count: item.count,
      article: item.article,
    });
  });
  res.push({
    installation: store.installation,
    totalPrice: store.price,
  });
  console.log(res);
}
</script>

<style scoped>
.result {
  width: 458px;
  padding: 46px 29px 34px 29px;
  border-radius: 5px;
  cursor: default;
}
.result__final {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;
  border-top: 1px solid #aeb0b6;
}
.result__price {
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin-bottom: 34px;
  margin-top: 42px;
}
.result__item {
  display: flex;
  justify-content: space-between;
  & p {
    font-weight: 500;
  }
}

.result__buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 38px;
}
.result__button-white {
  background-color: white;
  color: #0069b4;
  border: 1px solid #0069b4;
  &:hover {
    background-color: lightblue;
  }
}

/* fonts */
.result__heading {
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 28.93px;
}
.result__final-left {
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 26.1px;
}
.result__final-right {
  font-family: 'Roboto', sans-serif;
  font-size: 26px;
  font-weight: 700;
  line-height: 33.8px;
  letter-spacing: 0.005em;
}
</style>
