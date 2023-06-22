<template>
 <!--Componente de vista para la página de inicio de sesión. El componente muestra un formulario de inicio de sesión con 
 campos para el correo electrónico y la contraseña, y un botón para enviar el formulario.-->
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
import usuarioService from '../service/usuarioService.js';
import { useLoginStore } from "../stores/login"; //Utiliza la función useLoginStore para obtener acceso al store de Vuex llamado "login"

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
      const user = await usuarioService.getUsuario(this.usuario.email, this.usuario.passw)
      try {
        if (user.length > 0) {
        this.login(user[0]);
        this.$router.push("/paquetes");
      } else {
        alert("Credenciales erroneas");
      }
      } catch (error) {
        alert(error)
      }
  //Metodo: envia una solicitud de inicio de sesión al servicio usuarioService para verificar las credenciales del usuario. Si las 
  //credenciales son correctas, se realiza el inicio de sesión llamando a login del store y se redirige al usuario a la página 
  //"/paquetes". Si las credenciales son incorrectas, se muestra una alerta.   
      
      
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
