<!-- UserTable.vue -->

<template>
  <div class="grid grid-cols-4 gap-4 p-4">
    <div >
      <h2 class="text-2xl font-bold mb-4">User Table</h2>
      <table class="min-w-full border rounded">
        <thead>
          <tr>
            <th class="border p-2">User ID</th>
            <th class="border p-2">Age</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td class="border p-2">{{ user.user_id }}</td>
            <td class="border p-2 text-center">{{ user.age }}</td>
          </tr>
        </tbody>
      </table>
    </div>

     <div>
        <h2 class="text-2xl font-bold mb-4">Asset Table</h2>
        <table class="min-w-full border rounded">
          <thead>
            <tr>
              <th class="border p-2">User ID</th>
              <th class="border p-2">Item</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(asset, index) in assets" :key="index">
              <td class="border p-2">{{ asset.user_id }}</td>
              <td class="border p-2  text-center">{{ asset.item }}</td>
            </tr>
          </tbody>
        </table>
      </div>

    <div>
      <span class="text-xl font-extrabold mb-8 text-red-500">buat sql/ query untuk menghasil kan </span>
      <div>
        <h2 class="text-2xl font-bold mb-4">result_1</h2>
        <table class="min-w-full border rounded">
          <thead>
            <tr>
              <th class="border p-2">Item</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td class="border p-2">{{ item }}</td>
            </tr>
          </tbody>
        </table>
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-4">result_2</h2>
      <table class="min-w-full border rounded">
        <thead>
          <tr>
            <th class="border p-2">User ID</th>
            <th class="border p-2">Asset</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in assetData" :key="index">
            <td class="border p-2">{{ row.user_id }}</td>
            <td class="border p-2">{{ row.asset }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
    <div class="grid grid-rows-2 bg-slate-100 items-center">
      <div class="grid grid-rows-2 bg-slate-100 items-center">
        <span class="font-bold">answer result_1 : </span>
          <span class="text-red-500"> SELECT DISTINCT asset.item
            FROM asset
            JOIN user ON asset.user_id = user.user_id
            WHERE user.user_id = 'zaki';
          </span>
      </div>
      <div class="grid grid-rows-2">
        <span class="font-bold">answer result_2 : </span>
          <span class="text-red-500">
            SELECT user_id,
            GROUP_CONCAT(item ORDER BY item ASC SEPARATOR ', ') AS asset
            FROM asset
            GROUP BY user_id;
          </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const users = [
  { user_id: 'wildan', age: 27 },
  { user_id: 'zaki', age: 25 },
];

const assets = [
  { user_id: 'notebook', item: 'wildan' },
  { user_id: 'bag', item: 'wildan' },
  { user_id: 'notebook', item: 'zaki' },
  { user_id: 'bag', item: 'zaki' },
  { user_id: 'mobile phone', item: 'zaki' },
];

const items = ['notebook', 'bag', 'mobile phone']; 

const assetData = [
  { user_id: 'wildan', asset: 'notebook, bag' },
  { user_id: 'zaki', asset: 'notebook, mobile phone' },
];
</script>

<style scoped>
/* Tambahkan gaya CSS sesuai kebutuhan Anda */
</style>
