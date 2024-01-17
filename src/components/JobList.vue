
<template>
  <div class="container mx-auto mt-8">
    <h1 class="text-3xl font-bold mb-4">Job Posts</h1>
    <ul class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2 mb-4">
      <li v-for="job in jobs" :key="job.id"
        class="p-2 rounded-lg shadow-md bg-orange-100 flex justify-between items-center">
        <span class="text-base text-green-700 font-semibold">{{ job.title }}</span>
        <button @click="toggleDetails(job.id)" class="rounded-sm bg-yellow-500 py-1 px-2">See Jobs</button>
      </li>
    </ul>

    <section v-for="job in jobs" :key="job.id" class="bg-yellow-50">
      <article v-if="job.showDetails" class="p-4">
        <h2 class="text-xl font-bold mb-4 text-green-600">{{ job.title }}</h2>
        <div v-if="job.description" class="mt-4">
          <div v-if="job.description && job.description.txt" class="text-gray-800">
            <ul class="list-disc pl-6">
              <h5 class=""><strong>Job Description :</strong></h5>
              <li class="" v-for="item in parseHTML(job.description.txt)" :key="item" v-html="item"></li>
            </ul>
          </div>
        </div> 
      </article>
    </section>

    <div class="mt-4 bg-orange-100 p-4">
      <form @submit.prevent="submitApplication" class="grid grid-cols-2">
        <div class="mb-4">
          <label for="displayName" class="mb-2 block text-sm font-medium text-gray-700 ">Full Name:</label>
          <input class="border-b-2 border-gray-500 bg-transparent focus:ring-0 outline-none" v-model="formData.displayName"  type="text" id="displayName" name="displayName" required>
        </div>
        <div class="mb-4">
          <label for="number" class="mb-2 block text-sm font-medium text-gray-700 ">Mobile number:</label>
          <input class="border-b-2 border-gray-500 bg-transparent focus:ring-0 outline-none" v-model="formData.phone"  type="number" id="number" name="number" required>
        </div>
        <div class="mb-4">
          <label for="email" class="mb-2 block text-sm font-medium text-gray-700 ">Email:</label>
          <input class="border-b-2 border-gray-500 bg-transparent focus:ring-0 outline-none" v-model="formData.email"  type="email" id="email" name="email" required>
        </div>
        <!-- ... (other form fields) -->
        <div class="mb-4">
          <label for="message" class="mb-2 block text-sm font-medium text-gray-700 ">Message:</label>
          <textarea v-model="formData.message" id="message" name="message" rows="4" required class="p-4"></textarea>
        </div>
        <button  type="submit" class="bg-blue-400 text-white py-1 px-2 rounded w-1/3">Apply</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const formData = ref({
  displayName: 'test',
  email: 'ar@bti.id',
  subject: 'Marketing Planner',
  phone: '11111',
  message: 'test',
  ptJobApplyType: 'APPLICATION',
  isActive: false,
  ptJobPost: { id: 1 },
});

const jobs = ref([]);

const fetchJobPosts = async () => {
  try {
    const response = await axios.get('/api/job-posts');
    jobs.value = response.data.map(job => ({ ...job, showDetails: false }));
  } catch (error) {
    console.error('Error fetching job posts:', error);
  }
};

const submitApplication = async () => {
  try {
    // URL endpoint untuk POST request
    const apiUrl = '/api/job-applies';

    // Mendapatkan token akses dari suatu tempat (misalnya, localStorage atau Vuex state)
    const accessToken = '...';  // Gantilah dengan cara yang sesuai untuk mendapatkan token Anda

    // Melakukan POST request menggunakan axios dengan menyertakan token akses dalam header
    const response = await axios.post(apiUrl, formData.value, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Menanggapi hasil respons dari server
    console.log('Server Response:', response.data);

    // Clear formulir setelah pengiriman berhasil (opsional)
    clearForm();
  } catch (error) {
    console.error('Error submitting application:', error);
  }
};


const clearForm = () => {
  // Membersihkan nilai formulir setelah pengiriman berhasil
  formData.value = {
    displayName: '',
    email: '',
    subject: 'Marketing Planner',
    phone: '',
    message: '',
    ptJobApplyType: 'APPLICATION',
    isActive: false,
    ptJobPost: { id: 1 },
  };
}; 

const toggleDetails = (jobId) => {
  jobs.value.forEach(job => {
    job.showDetails = job.id === jobId ? !job.showDetails : false;
  });
};

const parseHTML = (html) => {
  if (html) {
    return html.split('<li>').slice(1).map(item => `<li>${item}`); 
  }
  if (html) {
    return html.split('<h5>').slice(1).map(item => `<h4>${item}`); 
  }
  return [];
};

onMounted(() => {
  // Fetch data when the component is mounted
  fetchJobPosts();
});
</script>

<style scoped>
/* Add your component styles here */
</style>
