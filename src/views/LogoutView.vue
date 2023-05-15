<template>
  <div class="container">
    <h2 class="title">¿Esta seguro que desea abandonar el</h2>
    <button class="button" @click="logout">Log out</button>
  </div>
</template>

<script>
import { useLoginStore } from "../stores/login";

export default {
  setup() {
    const store = useLoginStore();
    const { logout } = store;
    return { logout };
  },
  methods: {
    logout() {
      this.logout();
      this.$router.push("/");
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #cb0300;
  color: white;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #0062cc;
}
</style>
