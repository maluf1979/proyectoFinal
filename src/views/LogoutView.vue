
<template>
  <ion-page>
    <h2>Logout Page</h2>
      <ion-content>
        <ion-button @click="logout">Logout</ion-button>
      </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonContent } from "@ionic/vue";
import { useLoginStore } from "../stores/login";

export default {
  components: { IonPage, IonButton,IonContent },
  setup() {
    const store = useLoginStore();
    const { logout } = store;
    return { logout };
  },
  methods:{
    logout(){
        this.logout();
        this.$router.push("/")
    }
  }
};
</script>



<style>
</style>