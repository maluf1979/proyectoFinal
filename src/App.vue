<script>
import { RouterLink, RouterView } from "vue-router";
import { IonApp, IonHeader } from "@ionic/vue";

import { storeToRefs } from "pinia";
import { useLoginStore } from "./stores/login";

export default {
  components: { IonApp, IonHeader },
  setup() {
    const store = useLoginStore();
    const { isLogin } = storeToRefs(store);
    return { isLogin };
  },
};
</script>

<template>
  <ion-app>
    <ion-header style="background-color: white">
      <RouterLink to="/home">Home|</RouterLink>
      <RouterLink to="/about">About|</RouterLink>
      <RouterLink to="/paquetes">Paquetes|</RouterLink>
      <RouterLink to="/agregarPaquete">Agregar Paquetes |</RouterLink>
      <RouterLink to="/buscarVuelos">Buscar Vuelos |</RouterLink>
      <RouterLink to="/login">Login |</RouterLink>
      <RouterLink to="/logout">Logout</RouterLink>
    </ion-header>
    <RouterView />
    {{isLogin}}
  </ion-app>
</template>

<style></style>
