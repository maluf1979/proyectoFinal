<template>
  <ion-page>
    <h2>Paquetes</h2>
    <button @click="irHome">Ir a Home</button>
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
export default {
  components: { IonPage },
  methods: {
    irHome() {
      this.$router.push("/home");
    },
  },
};
</script>

<style>
</style>