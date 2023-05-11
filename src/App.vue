<script>
import { RouterLink, RouterView } from "vue-router";
import { IonApp, IonHeader } from "@ionic/vue";

export default {
  components: { IonApp, IonHeader },
};
</script>

<template>
  <ion-app>
    <ion-header style="background-color: white;">
      <RouterLink to="/home">Home|</RouterLink>
      <RouterLink to="/about">About|</RouterLink>
      <RouterLink to="/paquetes">Paquetes|</RouterLink>
      <RouterLink to="/agregarPaquete">Agregar Paquetes |</RouterLink>
      <RouterLink to="/buscarVuelos">Buscar Vuelos</RouterLink>
    </ion-header>
    <RouterView />
  </ion-app>
</template>

<style>
</style>
