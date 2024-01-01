<template>
  <div class="home">
    <div class="container">
      <!-- Review Form -->
      <review-form />
      <!-- Review Stats -->
      <review-stats />
      <!-- Review List -->
      <review-list />
    </div>
  </div>
</template>

<script setup>
import ReviewForm from "../components/ReviewForm.vue";
import ReviewStats from "../components/ReviewStats.vue";
import ReviewList from "../components/ReviewList.vue";
</script>
