//Aca se definen las rutas de la aplicación.
import { createRouter, createWebHistory } from "@ionic/vue-router"; //Se importan los componentes de las vistas que se utilizarán en las rutas.
import HomeView from "../views/HomeView.vue";
import Paquetes from "../views/PaquetesView.vue"; //Importo Paquetes.vue
import NotFound from "../views/NotFound.vue";
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue';
import ReservaView from '../views/ReservaView.vue';
import MisReservas from '../views/MisReservasView.vue'
import { useLoginStore } from '../stores/login'

const router = createRouter({ //Se crea el enrutador utilizando createRouter y se configura con createWebHistory para utilizar el historial basado en la historia del navegador.
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ //Se definen las rutas utilizando la propiedad routes. Cada ruta tiene una path (ruta URL), un name (nombre de la ruta) y un component (componente de Vue asociado a la ruta).
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
      component: () => import("../views/AboutView.vue"), //(lazy-loading), diferido. 
    },
    {
      //Cargo la Ruta.
      path: "/paquetes",
      name: "paquetes",
      component: Paquetes,
    },
    {
      path: "/:pathMatch(.*)*", //Ruta de fallback para rutas no definidas anteriormente. Está asociada al componente "NotFound".
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
    },   
    {
      path: "/reserva/:id",
      name: "reserva",
      component: ReservaView,
      meta: { RequireAuth: true },
    },
    {
      path: "/misReservas",
      name: "misReservas",
      component: MisReservas,
      meta: { RequireAuth: true },
    },
  ],
});

//Guardia de navegación (beforeEach) que se ejecuta antes de cada cambio de ruta. 
//Se obtiene la instancia del almacén de login mediante useLoginStore(). 
//Si la ruta a la que se está navegando tiene la propiedad meta.RequireAuth y el usuario no ha iniciado sesión 
//(store.isLogin es false), se redirige al usuario a la ruta "/login". De lo contrario, se permite la navegación normalmente.

router.beforeEach((to, from, next) => {
  const store = useLoginStore();
  if (to.matched.some(r => r.meta.RequireAuth) && !store.isLogin) {
    next('/login')
  } else {
    next()
  }
})

export default router;
