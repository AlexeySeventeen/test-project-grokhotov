<template>
  <div class="wrapper__main">
    <HeaderShoppingCart />
    <Main />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import {useStore} from '~/store/store';
import axios from 'axios';
import {useAsyncData} from 'nuxt/app';

const store = useStore();
await useAsyncData('items', () => store.getItems().then(() => true));
</script>

<style>
@import url('~/assets/css/reset.css');
@import url('~/assets/css/pattern.css');

.wrapper__main {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 80px;
}
</style>
