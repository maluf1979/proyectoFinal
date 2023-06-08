<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Sobre nosotros:</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid class="about-container">
        <ion-row>
          <ion-col size="8">
            <ion-card class="about-content">
              <ion-card-content>
                <h3>Quiénes somos</h3>
                <p>En [Nombre de la Empresa], nos apasiona el mundo de los viajes y nos dedicamos a brindar experiencias inolvidables a nuestros clientes. Somos una empresa líder en la industria, con años de experiencia en la planificación y organización de viajes a destinos fascinantes en todo el mundo.</p>

                <p>Nuestro objetivo principal es hacer realidad los sueños de viaje de nuestros clientes, superando sus expectativas en cada paso del camino. Nos esforzamos por ofrecer un servicio de calidad, personalizado y enfocado en cada detalle para garantizar que cada viaje sea único y memorable.</p>

                <p>Contamos con un equipo de profesionales apasionados y expertos en viajes, que están disponibles para asesorar y ayudar a nuestros clientes en cada etapa de su aventura. Ya sea que estén buscando unas vacaciones relajantes en una playa paradisíaca, una emocionante escapada urbana o una exploración de destinos exóticos, nuestro equipo estará allí para hacer realidad sus deseos de viaje.</p>

                <p>Además de nuestra atención personalizada, también nos enorgullece ofrecer una amplia gama de servicios de viaje, que incluyen la reserva de vuelos, hoteles, traslados, actividades y excursiones. Nos asociamos con los proveedores más confiables y de calidad en la industria para garantizar que nuestros clientes reciban el mejor servicio y disfruten de una experiencia sin contratiempos en cada aspecto de su viaje.</p>

                <p>En [Nombre de la Empresa], creemos en la importancia de descubrir nuevos lugares, culturas y experiencias. Valoramos los viajes como una forma de enriquecimiento personal y conexión con el mundo que nos rodea. Nos esforzamos por fomentar el espíritu aventurero y ayudar a nuestros clientes a crear recuerdos que atesorarán toda la vida.</p>

                <p>Si estás buscando un socio confiable para tus próximas aventuras, no busques más. En [Nombre de la Empresa], estamos aquí para convertir tus sueños de viaje en realidad. Únete a nosotros en esta emocionante travesía y déjanos llevarte a descubrir los destinos más extraordinarios del mundo.</p>
              </ion-card-content>
            </ion-card>
          </ion-col>

          <ion-col size="4">
            <ion-card class="about-image">
              <ion-img src="images/about.jpg" alt="Imagen Sobre Nosotros"></ion-img>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>

    <ion-footer>
      <ion-toolbar class="footer-toolbar">
        <ion-buttons>
          <ion-button href="https://facebook.com" target="_blank">
            <ion-icon name="logo-facebook"></ion-icon>
            Facebook
          </ion-button>
          <ion-button href="https://twitter.com" target="_blank">
            <ion-icon name="logo-twitter"></ion-icon>
            Twitter
          </ion-button>
          <ion-button href="https://instagram.com" target="_blank">
            <ion-icon name="logo-instagram"></ion-icon>
            Instagram
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonImg } from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonImg
  },
};
</script>

<style scoped>
.about-container {
  margin-top: 20px;
}

.about-content {
  padding: 20px;
}

.about-image {
  padding: 20px;
  text-align: right;
}

.about-image ion-img {
  max-width: 100%;
  height: auto;
}

.about-content h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.about-content p {
  margin-bottom: 10px;
  line-height: 1.5;
}

.about-content p:last-child {
  margin-bottom: 0;
}

.about-content ion-button {
  margin-right: 10px;
  margin-bottom: 10px;
}

.about-content ion-button:last-child {
  margin-right: 0;
}

</style>
