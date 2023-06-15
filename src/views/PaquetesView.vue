<template>
  <ion-page>
    <div class="search-container">
      <div class="search-input-container">
        <IonIcon :icon="searchOutline" class="search-icon"></IonIcon>
        Destino: <input type="string" v-model="filtro" class="search-input" />
      </div>
      <ion-button v-on:click="filtrar" class="search-button"
        >Buscar Destino</ion-button
      >
    </div>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col
            v-for="p in paquetes"
            :key="p.Destino"
            size="12"
            size-md="6"
            size-lg="4"
          >
            <ion-card>
              <ion-card-header>
                <ion-card-title>{{ p.Destino }}</ion-card-title>
              </ion-card-header>
              <ion-card-content @click="cargarPaquete(p.id)">
                <p>Transporte: {{ p.Tipo }}</p>
                <p>Fecha de partida: {{ p.FechaPartida }}</p>
                <p>Fecha de regreso: {{ p.FechaRegreso }}</p>
                <p>Duración en días: {{ p.CantidadDias }}</p>
                <p>Precio: {{ p.Precio }}</p>
                <ion-button @click="reservar(p)">Reservar</ion-button>
                <ion-button
                  v-if="hasPermissions('admin')"
                  @click="eliminarPaquete(p.id)"
                  >Eliminar</ion-button
                >
                <ion-button
                  v-if="hasPermissions('admin')"
                  @click="modificarPaquete(p.id)"
                  >Modificar</ion-button
                >
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-card-content v-if="hasPermissions('admin')">
      Transporte:<input type="text" v-model="paquete.Tipo" /> Destino:<input
        type="text"
        v-model="paquete.Destino"
      />
      Fecha Partida:<input type="date" v-model="paquete.FechaPartida" /> Fecha
      Regreso:<input type="date" v-model="paquete.FechaRegreso" /> Dias:<input
        type="number"
        :value="(paquete.CantidadDias = duracion)"
        disabled
      />
      Precio:<input type="number" v-model="paquete.Precio" />
      <ion-button @click="agregarDestino">Agregar Destino</ion-button>
    </ion-card-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonAlert,
  IonIcon,
  alertController,
} from "@ionic/vue";
import listaService from "../service/paqueteService.js";
import reservaService from "../service/reservaService.js";
import { searchOutline } from "ionicons/icons";

import { storeToRefs } from "pinia";
import { useLoginStore } from "../stores/login";

export default {
  components: {
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonAlert,
    IonIcon,
  },
  data() {
    return {
      filtro: "",
      paquetes: [],
      paquete: {
        Tipo: "",
        Destino: "",
        FechaPartida: "",
        FechaRegreso: "",
        CantidadDias: "",
        Precio: 0,
      },
      searchOutline: searchOutline,
    };
  },
  mounted() {
    this.cargarLista();
  },
  setup() {
    const store = useLoginStore();
    const { isLogin, user } = storeToRefs(store);
    const { hasPermissions } = store;
    return { isLogin, hasPermissions, user };
  },
  computed: {
    duracion() {
      const fechaPartida = new Date(this.paquete.FechaPartida);
      const fechaRegreso = new Date(this.paquete.FechaRegreso);
      const duracionMs = fechaRegreso - fechaPartida;
      const duracionDias = duracionMs / (1000 * 60 * 60 * 24);
      return duracionDias;
    },
  },
  methods: {
    async reservar(paquete) {
      if (this.isLogin) {
          if (confirm("¿Este es el paquete que quieres reservar?")) {
          await reservaService.crearReserva(paquete, this.user.id)
          this.$router.push("/reserva/" + paquete.id);
          } 
        }else{
          this.$router.push("/login")
      }
      
    },

    filtrar() {
      this.paquetes = this.paquetes.filter((p) =>
        p.Destino.toLowerCase().includes(this.filtro.toLowerCase())
      );
      if (this.filtro === "") {
        this.cargarLista();
      }
    },

    async agregarDestino() {
      const paquete = { ...this.paquete };
      try {
        await listaService.agregarElemento(paquete);
        this.cargarLista();
        this.paquete = {};
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    async cargarLista() {
      try {
        this.paquetes = await listaService.cargarLista();
      } catch (error) {
        alert("error de conexion");
      }
    },

    async eliminarPaquete(id) {
      try {
        await listaService.eliminarElemento(id);
        this.cargarLista();
      } catch (error) {
        alert("error de conexion");
      }
    },

    async modificarPaquete(id) {
      const paquete = { ...this.paquete };
      try {
        await listaService.modificarElemento(id, paquete);
        this.paquete = {};
        this.cargarLista();
      } catch (error) {
        alert("error de conexion");
      }
    },
    async cargarPaquete(id) {
      try {
        this.paquete = await listaService.buscarPaquete(id);
      } catch (error) {
        alert("error de conexion");
      }
    },
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

.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.search-input-container {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 80%;
  max-width: 400px;
  padding: 5px;
  margin-bottom: 10px;
}

.search-icon {
  color: #999;
  font-size: 20px;
  margin-right: 5px;
}

.search-input {
  flex: 1;
  border: none;
  font-size: 16px;
  padding: 5px;
  outline: none;
}

.search-button {
  width: 80%;
  max-width: 300px;
  font-size: 16px;
  margin-top: 10px;
}
</style>
