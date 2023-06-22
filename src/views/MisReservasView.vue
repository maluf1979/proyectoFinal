<template>
<!--Definición de un componente de vista llamado MisreservasView, que muestra una lista de reservas de viaje.-->
<ion-content>
      <ion-grid>
        <ion-row>
          <ion-col v-for="r in reservas" :key="r.id" size="12" size-md="6" size-lg="4">
            <ion-card>
              <ion-card-header>
                <ion-card-title>{{ r.paquete.Destino }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p>Transporte: {{ r.paquete.Tipo }}</p>
                <p>Fecha de partida: {{ r.paquete.FechaPartida }}</p>
                <p>Fecha de regreso: {{ r.paquete.FechaRegreso }}</p>
                <p>Duración en días: {{ r.paquete.CantidadDias }}</p>
                <p>Precio: {{ r.paquete.Precio }}</p>
                <ion-button
                  color="danger"
                  @click="eliminarReserva(r.id)"
                  >Eliminar</ion-button
                >
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  
</template>

<script>
import {IonPage,IonGrid,IonRow,IonCol,IonCard,IonCardHeader,IonCardTitle, IonCardContent, IonButton, IonAlert} from "@ionic/vue";

import { storeToRefs } from "pinia";
import { useLoginStore } from "../stores/login";
import reservaService from '../service/reservaService.js';
export default {
      components: {IonPage,IonGrid,IonRow,IonCol,IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonButton, IonAlert,},
    data() {
        return{
            reservas:[],
            reserva: {Tipo:'', Destino: '', FechaPartida:'',FechaRegreso:'',CantidadDias:'', Precio: 0},
        }
    },
    setup() {
    const store = useLoginStore(); //useLoginStore para obtener acceso al usuario actualmente autenticado
    const { user } = storeToRefs(store);
    return { user };
  },
    mounted() {
    //this.id = this.$route.params.id;
    this.cargarMisResevas() //Se llama en el método mounted para cargar las reservas del usuario actual
  },
  methods:{
    async cargarMisResevas(){
      try {
        this.reservas = await reservaService.cargarMisReservas(this.user.id)
        console.log(this.reservas);
      } catch (error) {
        alert("error de conexion");
      }
    },
    async eliminarReserva(id) { //Eliminar una reserva cuando se hace clic en el botón "Eliminar" correspondiente.
      try {
        if (confirm("¿Estas seguro que quieres eliminar esta reserva?")) {
          await reservaService.eliminarReserva(id); //utiliza el servicio reservaService para realizar operaciones relacionadas con las reservas,
          this.cargarMisResevas();                  //como cargar las reservas del usuario actual y eliminar una reserva específica.
        }
      } catch (error) {
        alert("error de conexion");
      }
    }

  }
  
    

}
</script>

<style>

</style>