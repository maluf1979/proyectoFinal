<script>
import { RouterLink, RouterView } from "vue-router";
import { IonApp, IonHeader } from "@ionic/vue";
import { storeToRefs } from "pinia";
import { useLoginStore } from "./stores/login";

export default {
  components: { IonApp, IonHeader },
  setup() {
    const store = useLoginStore();
    const { isLogin, user } = storeToRefs(store);
    const { hasPermissions } = store;
    return { isLogin, user, hasPermissions };
  },
};
</script>

<template>
  <ion-app>
    <ion-header style="background-color: white">
      <RouterLink to="/">Home|</RouterLink>
      <RouterLink to="/about">About|</RouterLink>
      <RouterLink v-if="isLogin" to="/paquetes">Paquetes|</RouterLink>
      <RouterLink v-if="!isLogin" to="/login">Login|</RouterLink>
      <RouterLink v-if="isLogin" to="/logout">Logout|</RouterLink>
      Usuario: {{ user.email }}
    </ion-header>
    <RouterView />
  </ion-app>
</template>

<style>
</style>
