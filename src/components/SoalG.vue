<!-- ArchitecturePage.vue -->

<template>
  <div class="p-4">
    <ConceptCard title="Soal G Berikan 3 Architecture Application di era sekarang"/>
    <ConceptCard title="Microservices Architecture"
      description="Arsitektur ini memecah aplikasi menjadi sejumlah kecil layanan yang independen satu sama lain"
      />

    <ConceptCard title="Serverless Architecture"
      description="Arsitektur serverless dirancang berbasis cloud computing sehingga tidak perlu kelola server"
      />

    <ConceptCard title="Monolithic Architecture:"
      description="Semua logika dan fungsi ditempatkan dalam satu unit. Komponen dalam sistem saling tergantung satu sama lain dan berbagi basis data."
     />
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

<style scoped>
/* Sesuaikan dengan gaya tampilan yang diinginkan */
</style>
