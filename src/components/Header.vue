<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToHome = () => {
  router.push("/");
};
</script>
<template>
  <header class="Header">
    <div class="navbar bg-base-300">
      <button @click="goToHome" class="btn btn-ghost text-xl">daisyUI</button>
    </div>
  </header>
</template>
