//Aca van las rutas de la aplicacion, las cuales se cargan en APP.vue
import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomeView from "../views/HomeView.vue";
import Paquetes from "../views/PaquetesView.vue"; //Importo Paquetes.vue
import NotFound from "../views/NotFound.vue";
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue';
import ReservaView from '../views/ReservaView.vue';
import { useLoginStore } from '../stores/login'

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
    {
      //Cargo la Ruta.
      path: "/paquetes",
      name: "paquetes",
      component: Paquetes,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
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
    },    {
      path: "/reserva/:id",
      name: "reserva",
      component: ReservaView,
      meta: { RequireAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const store = useLoginStore();
  if (to.matched.some(r => r.meta.RequireAuth) && !store.isLogin) {
    next('/login')
  } else {
    next()
  }
})

export default router;
