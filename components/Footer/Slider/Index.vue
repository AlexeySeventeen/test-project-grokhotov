<template>
  <Carousel class="slider__wrapper" v-bind="settings" :breakpoints="breakpoints" ref="myCarousel">
    <Slide v-for="item in store.items" :key="item.price">
      <FooterSliderCard :info="item" />
    </Slide>
  </Carousel>
</template>

<script>
import {useStore} from '~/store/store';
import {defineComponent} from 'vue';
import {Carousel, Navigation, Slide} from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
  name: 'Breakpoints',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    settings: {
      itemsToShow: 4,
      snapAlign: 'center',
    },
    breakpoints: {
      1024: {
        itemsToShow: 4,
        snapAlign: 'start',
      },
    },
  }),
  computed: {
    store: () => useStore(),
  },
  props: {
    active: Number,
  },
  watch: {
    active(newValue) {
      this.$refs.myCarousel.slideTo(newValue * 4 - 4);
    },
  },
});
</script>

<style scoped>
.slider__wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 66px;
}
</style>
