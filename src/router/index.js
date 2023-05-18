//Aca van las rutas de la aplicacion, las cuales se cargan en APP.vue
import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomeView from "../views/HomeView.vue";
import Paquetes from "../views/Paquetes.vue";//Importo Paquetes.vue
import NotFound from "../views/NotFound.vue";
import AgregarPaquete from "../views/AgregarPaquete.vue";
import BuscarVuelos from "../views/BuscarVuelosView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
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
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView,
    },
    {
      path:'/:pathMatch(.*)*',
      name:"NotFound",
      component: NotFound
      },

  ],
});

export default router;
