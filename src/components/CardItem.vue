<script setup>
defineProps({
  shopList: {
    type: Array,
    required: true,
  },
  goToShopList: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <div
    v-for="(item, index) in shopList"
    :key="index"
    class="card w-[400px] bg-base-100 shadow-xl border-2 overflow-hidden flex flex-col justify-center items-center"
  >
    <img
      :src="item.image"
      :alt="item.title"
      class="w-full object-contain h-[400px] bg-white"
    />

    <div class="card-body h-[300px]">
      <h2 class="card-title">{{ item.title }}</h2>
      <p>
        {{
          item.description.length > 50
            ? item.description.substring(0, 100) + "..."
            : item.description
        }}
      </p>
      <div class="card-actions justify-end">
        <button @click="goToShopList(item.id)" class="btn btn-primary">查看</button>
      </div>
    </div>
  </div>
</template>
