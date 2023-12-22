<script setup>
import { reactive, watch, computed, ref } from "vue";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <RouterView />
</template>

<style lang="scss" scoped></style>
