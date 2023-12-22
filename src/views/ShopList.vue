<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { Head } from "@unhead/vue/components";
import axios from "axios";

const shopItem = ref(null);
const description = ref("");

const router = useRouter();
const id = ref(router.currentRoute.value.params.id);

const getShopItemById = async (id) => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    shopItem.value = data;
    description.value = data.description;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(async () => {
  await getShopItemById(id.value);
});

watchEffect(() => {
  if (shopItem.value) {
    document.title = shopItem.value.title;
  }
});
</script>

<template>
  <Head>
    <meta name="description" :content="description" />
  </Head>
  <div class="ShopList">
    <div class="container">
      <p>網站的Head</p>
      <p>ShopList</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
