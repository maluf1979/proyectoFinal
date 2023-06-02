<template>
  <ion-page>
    <ion-content>
      <ion-card-content>
        <p>Destino: {{ reserva.Destino }}</p>
        <p>Transporte: {{ reserva.Tipo }}</p>
        <p>Fecha de partida: {{ reserva.FechaPartida }}</p>
        <p>Fecha de regreso: {{ reserva.FechaRegreso }}</p>
        <p>Duración en días: {{ reserva.CantidadDias }}</p>
        <p>Precio: {{ reserva.Precio }}</p>
      </ion-card-content>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonCardContent, IonContent } from "@ionic/vue";
import listaService from "../service/listaService";

export default {
  components: { IonPage, IonCardContent, IonContent },
  data() {
    return {
      reserva: {Tipo: "",Destino: "",FechaPartida: "",FechaRegreso: "",CantidadDias: "", Precio: 0,},
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
        console.log(id);

        this.reserva = await listaService.buscarPaquete(id);
        console.log(this.reserva);
      } catch (error) {
        alert("error de conexion");
      }
    },
  },
};
</script>

<style></style>
