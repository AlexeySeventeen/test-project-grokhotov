<template>
  <div style="margin-bottom: 100px">
    <FooterText @changeSlide="changeSlide++" />
    <FooterSlider :changeSlide="changeSlide" />
  </div>
</template>

<script setup>
const changeSlide = ref(0);
</script>
