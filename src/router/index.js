//Aca van las rutas de la aplicacion, las cuales se cargan en APP.vue
import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomeView from "../views/HomeView.vue";
import Paquetes from "../views/Paquetes.vue";//Importo Paquetes.vue
import NotFound from "../views/NotFound.vue";
import AgregarPaquete from "../views/AgregarPaquete.vue";
import BuscarVuelos from "../views/BuscarVuelosView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // División de código a nivel de ruta
      // Esto genera un fragmento separado (About.[hash].js) para esta ruta
      // que se carga de forma diferida (lazy-loaded) cuando se visita la ruta.
      component: () => import("../views/AboutView.vue"),
    },
    { //Cargo la Ruta.
      path: "/paquetes",
      name: "paquetes",
      component: Paquetes,

    },
    {
      path: "/agregarPaquete",
      name: "agregarPaquete",
      component: AgregarPaquete,
    },
    {
      path: "/buscarVuelos",
      name: "buscarVuelos",
      component: BuscarVuelos,
    },
    {
      path:'/:pathMatch(.*)*',
      name:"NotFound",
      component: NotFound
      },

  ],
});

export default router;
