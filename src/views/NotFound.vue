<template>
  <ion-page>
    <div class="container">
      <h2 class="title">Página no encontrada :(</h2>
      <img src="/images/not-found.png" alt="Page not found" />
    </div>
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";
export default {
  components: { IonPage },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.title {
  font-size: 2rem;
  margin-top: 1rem;
}

img {
  width: 200%;
  max-width: 700px;
  margin-bottom: 1rem;
}
</style>
