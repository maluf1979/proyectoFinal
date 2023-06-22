<template>

<!--muestra los detalles de una reserva de paquete de viaje.-->
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
  
  data() { //contiene las propiedades del componente, incluyendo reserva para almacenar los detalles de la reserva y id para almacenar el ID del paquete de viaje asociado a la reserva.
    return {
      reserva: {Destino: "",Tipo: "",FechaPartida: "",FechaRegreso: "",CantidadDias: "", Precio: 0,},
      id: 0,
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.cargarPaquete(this.id);
  },

  methods: { //se obtiene el ID del paquete de viaje desde los parámetros de ruta ($route.params.id) y se asigna a la propiedad id. Luego, se llama al método cargarPaquete para cargar los detalles de la reserva.
    async cargarPaquete(id) { //utiliza el servicio paqueteService para buscar y obtener los detalles del paquete de viaje correspondiente al ID proporcionado. Los detalles se asignan a la propiedad reserva.
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
