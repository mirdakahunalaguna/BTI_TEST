<!-- ConceptsPage.vue -->

<template>
  <div class="P-4">
    <ConceptCard title="Cypress"
      description="alat uji end to end" />

    <ConceptCard title="Kubernetes"
      description="kontainer agar bisa lintas platform" />

    <ConceptCard title="ORM (Object-Relational Mapping)"
      description="relasi tabel" />

    <ConceptCard title="Class"
      description="yang saya tahu Class untuk programing berorientasi objek agar tidak duplikasi kode" />

    <ConceptCard title="Function"
      description="blok kode untuk operasi logika" />

    <ConceptCard title="DevOps (Development and Operations)"
      description="kolaborasi dalam pembangunan sistem" />

    <ConceptCard title="Docker"
      description="pembungkus aplikasi dan dependensi agar mudah di distribusi" />
  </div>
</template>

<script>
import ConceptCard from '@/components/ConceptCard.vue';

export default {
  components: {
    ConceptCard,
  },
};
</script>

<style scoped>/* Sesuaikan dengan gaya tampilan yang diinginkan */</style>
