<template>
  <div class="feedback-stats">
    <h4>{{ store.reviewsCount ?? 0 }} Reviewers</h4>
    <h4>
      Average Rating: {{ isNaN(store.averageRating) ? 0 : store.averageRating }}
    </h4>
  </div>
</template>

<script setup>
import { useReviewsStore } from "../stores/reviews";

const store = useReviewsStore();
</script>

<style lang="scss" scoped>
</style>