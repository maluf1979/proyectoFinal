<template>
  <ion-page>
        <ion-card-content>
                        <p>Transporte: {{ reserva.Tipo }}</p>
                        <p>Fecha de partida: {{ reserva.FechaPartida }}</p>
                        <p>Fecha de regreso: {{ reserva.FechaRegreso }}</p>
                        <p>Duración en días: {{ reserva.CantidadDias }}</p>
                        <p>Precio: {{ reserva.Precio }}</p>
                    </ion-card-content>
        </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
import listaService from "../service/listaService";

export default {
  components: { IonPage },
  data() {
    return{
            reserva: {Tipo:'', Destino: '', FechaPartida:'',FechaRegreso:'',CantidadDias:'', Precio: 0},
            id:0
    }
  },
    mounted() {
      this.id=this.$route.params.id
      this.cargarPaquete(this.id)
  },
  methods: {
    async cargarPaquete(id) {
      try {
        this.reserva = await listaService.buscarPaquete(id);
      } catch (error) {
        alert("error de conexion");
      }
    },
  },
};
</script>

<style></style>
