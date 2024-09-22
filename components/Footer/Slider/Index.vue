<template>
  <Carousel @slide-end="slide" class="slider__wrapper" v-bind="settings" :breakpoints="breakpoints" ref="myCarousel">
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
      mouseDrag: true,
      touchDrag: true,
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
    changeSlide: Number,
  },
  methods: {
    slide(value) {
      this.store.currentSlide = Math.ceil(value.currentSlideIndex / this.settings.itemsToShow + 1 / this.settings.itemsToShow);
    },
  },
  watch: {
    changeSlide() {
      this.$refs.myCarousel.slideTo(this.store.currentSlide * 4 - 4);
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
