<template>
  <button>
    <slot></slot>
  </button>
</template>

<script></script>

<style scoped>
button {
  height: 54px;
  width: 100%;
  color: white;
  background-color: #0069b4;
  border-radius: 4px;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  &:hover{
    background-color: #0979c9;
  }
}
</style>
