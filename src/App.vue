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
    <ion-header class="header">
      <nav>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li ><RouterLink to="/paquetes">Paquetes</RouterLink></li>
          <li v-if="!isLogin"><RouterLink to="/login">Login</RouterLink></li>
          <li v-if="isLogin"><RouterLink to="/misReservas">Mis Reservas</RouterLink></li>
          <li v-if="isLogin" class="logout"><RouterLink to="/logout" @click="confirmLogout">Logout</RouterLink></li>
        </ul>
      </nav>
      <div class="user-info" v-if="isLogin">Usuario: {{ user.email }}</div>
    </ion-header>
    <ion-content>
    <RouterView />
    </ion-content>
  </ion-app>
</template>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007aff;
  color: white;
  height: 4rem;
  padding: 0 1rem;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin-right: 1rem;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

nav ul li a:hover {
  background-color: #0062cc;
}

.user-info {
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 1rem;
}
</style>
