<!-- PatternComponent.vue -->

<template>
  <div>
    <h1>Soal E</h1>
    <label for="inputN" class="mr-4">Enter value for n:</label>
    <input v-model.number="n" type="number" class="p-4 border-2" />
    <button @click="generatePattern">Generate</button>
    <pre>{{ patternOutput }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 5, // Nilai n sesuai kebutuhan Anda
    };
  },
  computed: {
    patternOutput() {
      let output = '';
      for (let i = 1; i <= this.n; i++) {
        let row = '';
        for (let j = 1; j <= this.n+3; j++) {
          if (j === i || j === i + 1) {
            row += '*';
          } else {
            row += j;
          }
        }
        output += row + '\n';
      }
      return output;
    },
  },
  methods: {
    generatePattern() {
      // Tambahkan 3 ke nilai n yang dimasukkan oleh pengguna
      this.n += 3; 
    },
  },
};
</script>

<style scoped>
/* Sesuaikan dengan gaya tampilan yang diinginkan */
</style>
