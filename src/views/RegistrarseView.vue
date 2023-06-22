<template>
  <ion-header>
  <ion-toolbar>
    <ion-title>
      Formulario de Registro
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
    <ion-item>
      <ion-label position="floating">Correo Electrónico</ion-label>
      <ion-input type="email" v-model="usuario.email" name="email" required></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Contraseña</ion-label>
      <ion-input type="password" v-model="usuario.contrasenia" name="password" required></ion-input>
    </ion-item>
    <div padding>
      <ion-button @click="registrarse" expand="full" type="submit">Registrarse</ion-button>
    </div>
</ion-content>

</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonImg } from "@ionic/vue";
import usuarioService from '../service/usuarioService.js';

export default {
  components: {IonPage,IonHeader,IonToolbar,  IonTitle, IonContent,IonGrid,  IonRow,  IonCol, IonCard,  IonCardContent,  IonImg}, 
  data(){
        return{
            usuario:{email:'', contrasenia:'', permiso:''}
        }
  },
  methods:{
    async registrarse(){
    const user = { ...this.usuario };
    try {      
        await usuarioService.agregarUsuario(user);
        console.log(user);
        this.$router.push("/login")
        } catch (error) {
            alert("error de conexion");
        }
    }
  }
  
}
</script>

<style>

</style>