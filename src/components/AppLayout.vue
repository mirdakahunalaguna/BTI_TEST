<template>
  <div class="h-screen gap-4 p-4">
    <div class="row-span-2 bg-black text-white p-4 text-center">
      <!-- Konten Baris Pertama dan Kedua Digabungkan -->
      <div class="w-full p-4 bg-blue-500 mb-4 grid grid-cols-1">
        <span>1</span>
        <span class="bg-green-700 p-1">soal A Make responsive Web </span>
      </div>
     <div class="grid grid-col-1 lg:grid-cols-2 gap-4 mb-4">
      <div class="bg-blue-500 text-white p-2 lg:p-4 sm:col-span-1 ">
        <!-- Konten element Pertama -->
        2
      </div>
      <div class="bg-blue-500 text-white p-2 lg:p-4 sm:col-span-1 ">
      <!-- Konten element Kedua -->
          3
      </div>
    </div>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4"> 
        <div class="lg:col-span-3 grid grid-rows-3 bg-black h-full gap-4 bg">          
          <div class="w-full  row-span-2 bg-blue-500 p-4">
            <div class="bg-red-500 h-full grid items-center justify-center">
              <span class=" text-center">4</span>
              <div class="flex gap-4 animate-pulse">
                <router-link to="/Joblist">
                  <span class="bg-green-400 text-center text-black rounded-md p-2">Soal B API Test</span>
                </router-link>
                <router-link to="/SqlTest">
                  <span class="bg-green-400 text-center text-black rounded-md p-2">Soal C SQL TEST </span>
                </router-link>
                <router-link to="/ErdTest">
                  <span class="bg-green-400 text-center text-black rounded-md p-2">Soal D. ERD TEST </span>
                </router-link>
                <router-link to="/ErdTestE">
                  <span class="bg-green-400 text-center text-black rounded-md p-2">Soal D. ERD TEST E </span>
                </router-link>
                <router-link to="/SoalF">
                  <span class="bg-green-400 text-center text-black rounded-md p-2">Soal F</span>
                </router-link>
                <router-link to="/SoalG">
                  <span class="bg-green-400 text-center text-black rounded-md p-2">Soal G</span>
                </router-link>
                </div>
              </div>
          </div>
          <div class="row-span-1 grid grid-cols-3 gap-4">
              <div class="bg-blue-500 text-white p-4">
                <!-- Konten Kolom Pertama -->
                5
              </div>
              <div class="bg-blue-500 text-white p-4">
                <!-- Konten Kolom Kedua -->
                6
              </div>
              <div class="bg-blue-500 text-white p-4">
                <!-- Konten Kolom Ketiga -->
                7
              </div>
          </div>        
        </div> 
        <div class="lg:col-span-1 bg-blue-500 text-white p-2">
          <!-- Konten Kolom Kedua (span-1) -->
          <div class="grid grid-cols-3 lg:grid-cols-1 gap-4">
            <div class="bg-black text-white p-2">
              <!-- Konten Elemen Pertama -->
              <div class="bg-red-500 p-2">8</div>
            </div>
            <div class="bg-black text-white p-2">
              <!-- Konten Elemen Kedua -->
               <div class="bg-red-500 p-2">9</div>
            </div>
            <div class="bg-black text-white p-2">
              <!-- Konten Elemen Ketiga -->
               <div class="bg-red-500 p-2">10</div>
            </div>
          </div>
      </div>
    </div>
  </div>
    <div class="hidden lg:grid grid-cols-3 gap-4 relative mt-4">
        <div class="col-span-2 bg-black text-white p-4">
          <!-- Konten Elemen Pertama -->
          <div class="bg-blue-500 text-white p-4 h-full">
            <!-- Elemen Pertama -->
            <div class="w-1/3 bg-red-500 text-white p-4 z-20">
              Elemen 1
            </div>

            <!-- Elemen Kedua -->
            <div class="w-1/3 bg-white text-black p-8 z-30 ml-10 -mt-5">
              Elemen 2
            </div>

            <!-- Elemen Ketiga -->
            <div class="w-1/3 bg-red-500 text-white p-4 z-40 ml-20 -mt-5">
              Elemen 3
            </div>
          </div>
        </div>
        <!-- Elemen di Atas -->
        <div class="absolute top-0 right-1/4 w-1/4 bg-red-500 p-4">
          test
        </div>
        <div class="grid grid-cols-3 gap-4">
          <!-- Elemen 1 (di pojok kanan) -->
          <div class="col-start-3 col-span-1 bg-blue-500 text-white p-4">
                <img alt="Vue logo" src="@/assets/logo.png">    
          </div>
        
          <!-- Elemen 2 (di pojok kiri) -->
          <div class="col-start-1 col-span-1 bg-green-500 text-white p-4">
            Elemen 2
          </div>

          <!-- Elemen 3 (mengisi kolom tengah) -->
          <div class="col-start-2 col-span-1 bg-white text-white p-4">
            Elemen 3
          </div>
        </div>
      </div>
  </div>

</template>

<script>
export default {
  name: 'AppLayout', // Updated component name
  data() {
    return {
      greeting: "Hello, Vue!"
    };
  }
};
</script>

<style scoped>
/* Styles khusus untuk komponen ini */
</style>
