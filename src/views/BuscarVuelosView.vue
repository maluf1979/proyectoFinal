<template>
    <ion-page>
        <ion-card>
            <ion-item> 
                    <ion-input v-model="vuelo.origen" label="Origen:" placeholder="lugar de salida"></ion-input>
                    <ion-input v-model="vuelo.destino" label="Destino:" placeholder="lugar de llegada"></ion-input>
                    <ion-input type="date" v-model="vuelo.fechaSalida" label="Fecha Salida:" placeholder="fecha de salida"></ion-input>
                    <ion-input type="date" v-model="vuelo.fechaRegreso" label="Fecha Vuelta:" placeholder="fecha de regreso"></ion-input>
            </ion-item>
            <ion-button expand="block" @click="filtrarPorDestinoFecha">Buscar Vuelo</ion-button>
            <ion-col v-for="(v,index) in vuelos" :key="index">
                <ion-content>
                     {{v.origen}} {{v.destino}}
                </ion-content>
            </ion-col>
        </ion-card>
    </ion-page>
</template>

<script>
import {IonPage, IonItem, IonInput, IonCard, IonCol} from "@ionic/vue";
import vuelos from "../components/listaDeVuelos.js"
export default {
    components: {IonPage, IonItem, IonInput, IonCard, vuelos,IonCol},
    data(){
        return{
            vuelo: {}
        }
    },
    methods:{
        filtrarPorDestinoFecha(){
            if (this.vuelo === {}) {
            return;
        }
        //this.paquetes = this.paquetes.filter((p) =>
        //p.Destino.toLowerCase().includes(this.filtro.toLowerCase())
        );

        }
    }

}
</script>

<style>

</style>