<template>
  <Header />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import { useReviewsStore } from "./stores/reviews";
import { onMounted } from "vue";

const store = useReviewsStore();
onMounted(() => {
  store.fetchReviews();
});
</script>
