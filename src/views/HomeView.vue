<script>
import { IonPage, IonToolbar, IonHeader, IonCard, IonCardContent, IonGrid, IonNav, IonButton} from "@ionic/vue";
export default {
  components: { IonPage, IonToolbar, IonHeader, IonCard, IonCardContent, IonGrid, IonNav, IonButton },
  data() {
    return {
      travelImages: [
        {
          url: 'https://github.com/JuanFurgi/imagenes/blob/main/ARGENTINA.png?raw=true',
          title: 'ARGENTINA'
        },
        {
          url: 'https://github.com/JuanFurgi/imagenes/blob/main/ARGENTINA%20(3).png?raw=true',
          title: 'ESPAÑA'
        },
        {
          url: 'https://github.com/JuanFurgi/imagenes/blob/main/ARGENTINA%20(2).png?raw=true',
          title: 'ITALIA'
        },
        {
          url: 'https://github.com/JuanFurgi/imagenes/blob/main/ARGENTINA%20(1).png?raw=true',
          title: 'TURQUIA'
        },
        
      ]
    };
  }
};
</script>

<template>
  <ion-page style="margin-top: 70px">

    <ion-header>
      <ion-toolbar>
         <ion-row class="ion-align-items-center">
        <ion-col size="2">
          <img src="https://img.freepik.com/vector-gratis/avion-pasajeros-aislado_1284-41822.jpg" class="logo ion-text-left" style="width:20% ">
        </ion-col>
        <ion-col size="10">
          <div class="navbar ion-text-justify">
            <ion-button fill="clear" routerLink="/paquetes" style="font-family: 'Rubik', sans-serif;">
              Ofertas
            </ion-button>
            
          </div>
        </ion-col>
      </ion-row>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h1 class="ion-text-center" style="font-family: 'Rubik', sans-serif; font-size:50px">Destinos que te ofrecemos</h1>
      <ion-grid>
        <ion-row>
          <ion-col size="6" v-for="(image, index) in travelImages" :key="index">
            <ion-card>
              
              <ion-card-content>
                <img :src="image.url" :alt="image.title" style="height:500px; width:900px"/>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>