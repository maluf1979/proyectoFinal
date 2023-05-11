<template>
  <ion-page style="margin-top: 50px">
    Destino: <input type="string" v-model="filtro">
    <ion-button v-on:click="filtrar">Buscar Destino</ion-button>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col v-for="(p, index) in paquetes" :key="index" size="12" size-md="6" size-lg="4">
            <ion-card>
              <ion-card-header>
                <ion-card-title>{{ p.Destino }}</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p>Transporte: {{ p.Transporte }}</p>
                <p>Fecha de partida: {{ p.FechaPartida }}</p>
                <p>Fecha de regreso: {{ p.FechaRegreso }}</p>
                <p>Duración en días: {{ p.Dias }}</p>
                <ion-button @click="presentAlert">Reservar</ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>






</template>

<script>
//<AgregarPaquete @agregarPaquete="agregarPaquete"/>

import {IonPage,IonGrid,IonRow,IonCol,IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonButton,IonAlert,alertController,} from "@ionic/vue";
//import AgregarPaquete from '../views/AgregarPaquete.vue'
//import Vue from 'vue';
//import Vue from "/node_modules/.vite/deps/vue.js";

export default {
  props: ['paquete'],
  components: {IonPage,IonGrid,IonRow,IonCol,IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonButton,IonAlert},
  data() {
    return {
      filtro:"",
      paquete: {},
      paquetes: [
        {
          Transporte: "Aereo",
          Destino: "Cancun",
          FechaPartida: "10/05/2023",
          FechaRegreso: "15/05/2023",
          Dias: 5,
        },
        {
          Transporte: "Crucero",
          Destino: "Caribe",
          FechaPartida: "05/08/2023",
          FechaRegreso: "12/08/2023",
          Dias: 7,
        },
        {
          Transporte: "Terrestre",
          Destino: "Puerto Vallarta",
          FechaPartida: "20/06/2023",
          FechaRegreso: "26/06/2023",
          Dias: 6,
        },
/* 
        {
          Transporte: "Aereo",
          Destino: "Buenos Aires",
          FechaPartida: "15/07/2023",
          FechaRegreso: "25/07/2023",
          Dias: 10,
        },

        {
          Transporte: "Aereo",
          Destino: "Roma",
          FechaPartida: "01/08/2023",
          FechaRegreso: "10/08/2023",
          Dias: 9,
        },

        {
          Transporte: "Terrestre",
          Destino: "Playa del Carmen",
          FechaPartida: "12/09/2023",
          FechaRegreso: "16/09/2023",
          Dias: 4,
        },

        {
          Transporte: "Aereo",
          Destino: "Nueva York",
          FechaPartida: "20/10/2023",
          FechaRegreso: "28/10/2023",
          Dias: 8,
        },

        {
          Transporte: "Terrestre",
          Destino: "San Francisco",
          FechaPartida: "15/11/2023",
          FechaRegreso: "20/11/2023",
          Dias: 5,
        },
        {
          Transporte: "Aereo",
          Destino: "Sidney",
          FechaPartida: "15/12/2023",
          FechaRegreso: "25/12/2023",
          Dias: 10,
        },

        {
          Transporte: "Terrestre",
          Destino: "Las Vegas",
          FechaPartida: "01/01/2024",
          FechaRegreso: "05/01/2024",
          Dias: 4,
        },

        {
          Transporte: "Aereo",
          Destino: "Tokio",
          FechaPartida: "10/02/2024",
          FechaRegreso: "20/02/2024",
          Dias: 10,
        },

        {
          Transporte: "Terrestre",
          Destino: "Ciudad del Cabo",
          FechaPartida: "01/03/2024",
          FechaRegreso: "06/03/2024",
          Dias: 5,
        }, */
      ],
    };
  },
  setup() {
    const presentAlert = async () => {
      const alert = await alertController.create({
        header: "Estas seguro/a?",
        cssClass: "custom-alert",
        buttons: [
          {
            text: "No",
            cssClass: "alert-button-cancel",
          },
          {
            text: "Si",
            cssClass: "alert-button-confirm",
          },
        ],
      });

      await alert.present();
    };

    return { presentAlert };
  },
  methods: {
    reservar() {
      alert("Reserva realizada, destino agregado al carrito");
    },

    filtrar() {
  if (this.filtro === "") {
    return;
  }
  this.paquetes = this.paquetes.filter((p) =>
    p.Destino.toLowerCase().includes(this.filtro.toLowerCase())
  );
  },
    agregarPaquete(paquete){  
      //this.paquetes.push(paquete);
      this.paquete = JSON.parse(this.$route.query.paquete);
      //this.paquete = JSON.parse(this.$route.params.paquete);
      this.paquetes.push(paquete)
    }
  },
};
</script>

<style>
ion-card {
  height: 100%;
}

ion-alert.custom-alert {
  --backdrop-opacity: 0.7;
}

.custom-alert .alert-button-group {
  padding: 8px;
}

button.alert-button.alert-button-confirm {
  background-color: var(--ion-color-success);
  color: var(--ion-color-success-contrast);
}

.md button.alert-button.alert-button-confirm {
  border-radius: 4px;
}

.ios .custom-alert button.alert-button {
  border: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);
}

.ios button.alert-button.alert-button-cancel {
  border-right: 0;
  border-bottom-left-radius: 13px;
  border-top-left-radius: 13px;
}

.ios button.alert-button.alert-button-confirm {
  border-bottom-right-radius: 13px;
  border-top-right-radius: 13px;
}
</style>


