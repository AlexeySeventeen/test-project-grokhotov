<template>
  <div class="checkbox__wrapper blue-background">
    <input type="checkbox" @input="store.installation ? (store.installation = false) : (store.installation = true)" />

    <div class="checkbox__img">
      <img src="~assets/svg/checkbox-img.svg" alt="checkbox" />
    </div>

    <div class="checkbox__text">
      <h3 class="text-big black-text">Установка</h3>
      <p class="text-basic gray-text">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных товаров.</p>
    </div>
  </div>
</template>

<script setup>
import {useStore} from '~/store/store';
const store = useStore();
</script>

<style scoped>
.checkbox__wrapper {
  width: 100%;
  height: 102px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 24px;
}
input {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.checkbox__img {
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin: 0 20px;
}
</style>
