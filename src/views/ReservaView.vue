<template>
<ion-content>
      <ion-grid>
        <ion-row>
          <ion-col >
            <ion-card>
              <ion-card-header>
                <ion-card-title>{{ this.reserva.Destino }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p>Transporte: {{ this.reserva.Tipo }}</p>
                <p>Fecha de partida: {{ this.reserva.FechaPartida}}</p>
                <p>Fecha de regreso: {{ this.reserva.FechaRegreso }}</p>
                <p>Duración en días: {{ this.reserva.CantidadDias }}</p>
                <p>Precio: {{ this.reserva.Precio }}</p>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
</template>

<script>
import {IonPage,IonGrid,IonRow,IonCol,IonCard,IonCardHeader,IonCardTitle, IonCardContent, IonButton, IonAlert} from "@ionic/vue";
import paqueteService from "../service/paqueteService";

export default {
  components: {IonPage,IonGrid,IonRow,IonCol,IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonButton, IonAlert,},
  data() {
    return {
      reserva: {Destino: "",Tipo: "",FechaPartida: "",FechaRegreso: "",CantidadDias: "", Precio: 0,},
      id: 0,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.cargarPaquete(this.id);
  },

  methods: {
    async cargarPaquete(id) {
      try {
        this.reserva = await paqueteService.buscarPaquete(id);
      } catch (error) {
        alert("error de conexion");
      }
    },
  },
};
</script>

<style></style>
