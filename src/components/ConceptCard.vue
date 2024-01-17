<!-- ConceptCard.vue -->

<template>
  <div class="concept-card">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
  },
};
</script>

<style scoped>
/* Sesuaikan dengan gaya tampilan yang diinginkan untuk kartu konsep */
.concept-card {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
