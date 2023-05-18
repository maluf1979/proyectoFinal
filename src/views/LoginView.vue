
<template>
  <ion-page>
    <h2>Login Page</h2>
      <ion-content>
        <ion-input v-model="usuario.email" label="email" type="email"> </ion-input>
        <ion-input v-model="usuario.password" label="password" type="password"></ion-input>
        <ion-button @click="logear">Login</ion-button>
      </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonInput, IonButton, IonContent } from "@ionic/vue";
import { useLoginStore } from "../stores/login";

export default {
  components: { IonPage, IonInput, IonButton,IonContent },
  data(){
    return{
      usuario: {email: '' , password: ''}
    }
  },
  setup() {
    const store = useLoginStore();
    const { login } = store;
    return { login };
  },
  methods:{
    logear(){
      if (this.usuario.email == "usuario@test.com" && this.usuario.password == "123456") {
        this.login();
        this.$router.push("/")
      }else{
        alert("Usuario o Contraseña invalidas")
      }

    }
  }
};
</script>



<style>
</style>