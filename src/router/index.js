// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/components/AppLayout.vue';
import JobList from '@/components/JobList.vue';
import SqlTest from '@/components/SqlTest.vue';
import ErdTest from '@/components/ErdTest.vue';
import ErdTestE from '@/components/ErdTestE.vue';
import SoalF from '@/components/SoalF.vue';
import SoalG from '@/components/SoalG.vue';

const routes = [
  { path: '/', component: AppLayout },
  { path: '/Joblist', component: JobList },
  { path: '/SqlTest', component: SqlTest },
  { path: '/ErdTest', component: ErdTest },
  { path: '/ErdTestE', component: ErdTestE },
  { path: '/SoalF', component: SoalF },
  { path: '/SoalG', component: SoalG },
  // ... rute lainnya ...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
