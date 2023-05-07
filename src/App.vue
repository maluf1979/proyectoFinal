<script>
import { RouterLink, RouterView } from "vue-router";
import { IonApp, IonHeader } from "@ionic/vue";
export default {
  components: { IonApp, IonHeader },
};
</script>

<template>
  <ion-app>
    <ion-header>
      <RouterLink to="/home">Home|</RouterLink>
      <RouterLink to="/about">About|</RouterLink>
      <RouterLink to="/paquetes">Paquetes</RouterLink>
    </ion-header>
    <RouterView />
  </ion-app>
</template>

<style>
</style>
