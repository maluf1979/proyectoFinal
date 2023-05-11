<template>
  <ion-page>
    <ion-content>
      <ion-card>
         <ion-item>
             <ion-input v-model="paquete.Transporte" label="Transporte:" placeholder="medio de transporte"></ion-input>
          </ion-item>
          <ion-item>
              <ion-input v-model="paquete.Destino" label="Destino:" placeholder="lugar de destino"></ion-input>
          </ion-item>
          <ion-item>
              <ion-input type="date" v-model="paquete.FechaPartida" label="Fecha Partida:" placeholder="fecha de partida"></ion-input>
          </ion-item>
          <ion-item>
             <ion-input type="date" v-model="paquete.FechaRegreso" label="Fecha Regreso:" placeholder="fecha de regreso"></ion-input>
          </ion-item>
          <ion-item>
              <ion-input v-model="paquete.Dias" label="Dias:" placeholder="cantidad de dias"></ion-input>
          </ion-item> 
        <ion-button @click="agregarPaquete">Agregar Paquete</ion-button>
        </ion-card>
    </ion-content>
  </ion-page>
</template>
      
<script>


import { IonPage, IonButton, IonInput, IonContent, IonItem} from "@ionic/vue";

//import { createRouter, createWebHistory } from 'vue-router';
export default {

  components: { IonPage,IonButton, IonInput, IonContent,IonItem},
  data(){
    return{
        paquete:{}
    }
  },
  methods:{
    agregarPaquete(){
      //const objeto = { nombre: this.nombre };
      this.$router.push({ path: '/paquetes',params:{...this.paquete}, query: { objeto: JSON.stringify(this.paquete) } });
      //this.$router.push({ path: `/paquetes/${JSON.stringify(this.paquete)}` });

        //this.$emit('agregarPaquete', {...this.paquete})
        //this.$router.push('paquetes');
        this.$router.push("/paquetes")
        //this.$router.push({ name: 'paquetes', params: {paquete: this.paquete}});
    }
  }
};
</script>

<style>

</style>
