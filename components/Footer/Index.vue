<template>
  <div style="margin-bottom: 100px">
    <FooterText @next="(value) => (active = value)" />
    <FooterSlider :active="active" />
  </div>
</template>

<script setup>
const active = ref(1);
</script>

<style scoped></style>
