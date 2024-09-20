import {defineStore} from 'pinia';
import axios from 'axios';

export const useStore = defineStore('store', {
  state: () => ({
    items: [],
    cartItems: [],
    installation: false,
  }),

  actions: {
    async getItems() {
      try {
        const data = await axios.get('https://031ba94e69d5a031.mokky.dev/test');
        this.items = data.data.concat(data.data, data.data, data.data, data.data, data.data);
        this.cartItems = data.data.slice(0, 3);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },

  getters: {
    count(state) {
      let number = 0;
      state.cartItems.forEach((item) => {
        number = number + item.count;
      });
      return number;
    },
    price(state) {
      let number = 0;
      state.cartItems.forEach((item) => {
        number = number + item.price * item.count;
      });
      return number;
    },
  },
});
