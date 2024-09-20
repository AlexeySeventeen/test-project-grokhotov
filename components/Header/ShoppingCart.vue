<template>
  <div class="wrapper">
    <div class="cart">
      <img src="~assets/svg/shopping-cart.svg" alt="cart" />
      <div class="cart__text">
        <h3 class="text-basic black-text">Ваша корзина</h3>
        <p class="text-small gray-text">{{ store.cartItems.length }} товара</p>
        <p class="text-small black-text">{{ store.price }} ₽</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useStore} from '~/store/store';
const store = useStore();
</script>

<style scoped>
.wrapper {
  height: 95px;
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: default;
}

.cart {
  width: 132px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
