//Aca van las rutas de la aplicacion, las cuales se cargan en APP.vue
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

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
  ],
});

export default router;
