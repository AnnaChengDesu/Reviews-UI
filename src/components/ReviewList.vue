<template>
  <div>
    <p v-if="!store.reviewsContent || store.reviewsContent.length === 0">
      No Review Yet
    </p>
    <div class="reviewList">
      <review-item
        v-for="(item, i) in store.reviewsContent"
        :key="i"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup>
import ReviewItem from "./ReviewItem.vue";
import { useReviewsStore } from "../stores/reviews";

const store = useReviewsStore();
</script>

<style lang="scss" scoped>
</style>