<template>
  <div>
    <h2>Paquetes</h2>
    <button @click="irHome">Ir a Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    irHome() {
      this.$router.push("/HomeView");
    },
  },
};
</script>

<style>
</style>