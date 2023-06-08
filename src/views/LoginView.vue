<template>
  <div class="login-container">
    <form class="login-form" @submit.prevent="logear">
      <label for="email">Email:</label>
      <input v-model="usuario.email" type="email" id="email" required>
      <label for="password">Password:</label>
      <input v-model="usuario.passw" type="password" id="password" required>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import listaService from '../service/listaService.js';
import { useLoginStore } from "../stores/login";

export default {
  data() {
    return {
      usuario: { email: "", passw: "" },
    };
  },
  setup() {
    const store = useLoginStore();
    const { login } = store;
    return { login };
  },
  methods: {
    async logear() {
      // consultar api por usuario
      // por hoy hardcodeamos
      
      const user = await listaService.getUsuario(this.usuario.email, this.usuario.passw)
      
      try {
        if (
          user.length > 0
      ) {
        this.login({ email: this.usuario.email, permissions: [] });
        this.$router.push("/");
      } else if (
        this.usuario.email == "admin@test.com" &&
        this.usuario.passw == "123456"
      ) {
        this.login({ email: this.usuario.email, permissions: ["config"] });
        this.$router.push("/");
      } else {
        alert("Credenciales erroneas");
      }
      } catch (error) {
        alert(error)
      }
      
      
      
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

label {
  margin-bottom: 10px;
  font-weight: bold;
}

input {
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #3e8e41;
}
</style>
