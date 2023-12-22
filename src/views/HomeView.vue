<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import CardItem from "@/components/CardItem.vue";

const router = useRouter();
const shopList = ref([]);
const description = ref("");

const fetchDescription = async () => {
  try {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    console.log(data);
    shopList.value = data;
    description.value = data[1]?.description;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const goToShopList = (id) => {
  router.push(`/shoplist/${id}`);
};

onMounted(fetchDescription);
</script>

<template>
  <div class="container mt-5 flex gap-5 flex-wrap items-center">
    <CardItem :shopList="shopList" :goToShopList="goToShopList" />
  </div>
</template>
