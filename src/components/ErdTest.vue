<template>
  <div  class="bg-red-100 w-full p-10 text-center">
      <span class="text-2xl font-extrabold">
       D. ERD TEST 
    </span>
  </div>
  <div class="grid grid-cols-2">
    <div> 
        <img :src="layoutImage" alt="Image" />
      </div>
    <div> 
      <img :src="imageSrc" alt="Image" />
    </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: require('@/assets/ERD page.png'),  // Ganti dengan nama file gambar yang sesuai
      layoutImage: require('@/assets/layout.png'),  // Ganti dengan nama file gambar yang sesuai
    };
  },
};
</script>

<style>
/* Styling sesuai kebutuhan */
</style>
