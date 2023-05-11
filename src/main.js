import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { createPinia } from 'pinia'
import { IonicVue } from '@ionic/vue';
/* CSS básico requerido para que los componentes de Ionic funcionen correctamente */
import '@ionic/vue/css/core.css';
/* CSS básico para aplicaciones construidas con Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
/* Utilidades de CSS opcionales que pueden ser comentadas */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* import Vue from "/node_modules/.vite/deps/vue.js";

Vue.$eventBus = new Vue(); */

const app = createApp(App)
app.use(createPinia())
app.use(IonicVue)
app.use(router)

router.isReady().then(() => {
app.mount('#app');
});
