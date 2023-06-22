<script> //Define el componente de vista para la página de inicio de tu aplicación
import { //Importa los componentes necesarios de Ionic
  IonPage,
  IonToolbar,
  IonHeader,
  IonCard,
  IonCardContent,
  IonGrid,
  IonNav,
  IonButton,
} from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonToolbar,
    IonHeader,
    IonCard,
    IonCardContent,
    IonGrid,
    IonNav,
    IonButton,
  },
  methods: {
    redirectToPaquetes() {// lleva a la ruta /paquetes al presionar el boton "Ver Ofertas".
      this.$router.push("/paquetes");
    },
  },
  data() {
    return {
      travelImages: [
        {
          url: "https://github.com/JuanFurgi/imagenes/blob/main/ARGENTINA.png?raw=true",
          title: "ARGENTINA",
        },
        {
          url: "https://github.com/JuanFurgi/imagenes/blob/main/ARGENTINA%20(3).png?raw=true",
          title: "ESPAÑA",
        },
        {
          url: "https://github.com/JuanFurgi/imagenes/blob/main/ARGENTINA%20(2).png?raw=true",
          title: "ITALIA",
        },
        {
          url: "https://github.com/JuanFurgi/imagenes/blob/main/ARGENTINA%20(1).png?raw=true",
          title: "TURQUIA",
        },
      ],
    };
  },
};
</script>

<template>
  <ion-page style="margin-top: 0px">
    <ion-header>
      <ion-toolbar>
        <ion-row class="ion-align-items-center">
          <ion-col size="2">
            <img
              src="https://img.freepik.com/vector-gratis/avion-pasajeros-aislado_1284-41822.jpg"
              class="logo ion-text-left"
              style="width: 20%"
            />
          </ion-col>
          <ion-col size="10">
            <div class="navbar ion-text-justify">
              <button
                fill="clear"
                @click="redirectToPaquetes"
                class="custom-button"
              >
                Ver Ofertas
              </button>
            </div>
          </ion-col>
        </ion-row>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <h1 class="ion-text-center custom-title">Destinos que te ofrecemos</h1>
      <ion-grid>
        <ion-row>
          <ion-col size="6" v-for="(image, index) in travelImages" :key="index">
            <ion-card>
              <ion-card-content @click="redirectToPaquetes" style="cursor: pointer">
                <img
                  :src="image.url"
                  :alt="image.title"
                  style="height: 500px; width: 900px"
                  class="image-opacity"
                />
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>

    <ion-footer>
      <marquee behavior="scroll" direction="left">
        ¡Descubre nuestros increíbles paquetes de viajes con ofertas
        imperdibles! Recorre el mundo y vive experiencias inolvidables con
        nuestras exclusivas ofertas de viaje. Desde destinos exóticos hasta
        ciudades cosmopolitas, tenemos el paquete perfecto para satisfacer tus
        deseos de aventura y descubrimiento. Ya sea que busques relajarte en
        paradisíacas playas, explorar antiguas culturas o sumergirte en la
        emoción de las grandes metrópolis, nuestra selección de paquetes con
        descuento te llevará a vivir momentos únicos. ¡No dejes pasar esta
        oportunidad de viajar a precios inigualables! Nuestros expertos en
        viajes han diseñado cuidadosamente cada paquete para ofrecerte
        experiencias completas, con alojamiento de calidad, transporte cómodo y
        emocionantes actividades. Disfruta de la tranquilidad de tener todo
        organizado y aprovecha al máximo tu tiempo de vacaciones. No esperes
        más, reserva ahora y comienza a planificar tu próxima aventura con
        nosotros. ¡Descubre el mundo con nuestras irresistibles ofertas de
        viaje!
      </marquee>
    </ion-footer>
  </ion-page>
</template>

<style>
.custom-button {
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: violet;
  text-shadow: 2px 2px 4px yellow;
  background-color: yellow;
  border: 2px solid yellow;
  padding: 10px 20px;
  border-radius: 8px;
  margin-left: 1450px;
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  justify-content: flex-start;
  padding: 10px;
}

.custom-button:hover {
  background-color: violet;
  color: yellow;
  border: 2px solid violet;
}
.custom-title {
  font-family: "Rubik", sans-serif;
  font-size: 50px;
  color: yellow;
  text-shadow: 2px 2px 4px violet;
}
.image-opacity {
  transition: opacity 0.3s;
}

.image-opacity:hover {
  opacity: 0.8;
}
</style>
