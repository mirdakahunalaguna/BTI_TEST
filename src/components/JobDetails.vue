<template>
  <div>
    <div v-if="job.description">
      <h3 class="text-lg font-bold mb-2">Job Description:</h3>
      <div v-html="job.description.txt" class="text-gray-700"></div>
    </div>
    <h3 class="text-lg font-bold mt-4 mb-2">Skills:</h3>
    <ul class="list-disc pl-6 text-gray-700">
      <li v-for="skill in job.ptJobSkills" :key="skill.id">{{ skill.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['job']);
</script>

<style scoped>
/* Add your component styles here */
</style>
