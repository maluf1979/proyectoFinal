//Almacén (store) llamado "login" utilizando Pinia, una biblioteca para el manejo de estados en Vue.js.
import { defineStore } from 'pinia'
export const useLoginStore = defineStore('login', { //Se define el almacén utilizando defineStore. El primer argumento es el nombre del almacén ("login")
    state: () => {                                  //y el segundo argumento es un objeto que contiene la configuración del almacén.
        return { isLogin: false, user: { email: '', permissions: [] } }
    }, // Define el estado inicial del almacén. isLogin se inicializa como false, y el obj. user con sus propiedades.
    getters: {
        isLoginn() {//Getter del almacen que develve el estado de isLogin.
            return this.isLogin
        }
    },
    actions: { //Las acciones son funciones que pueden modificar el estado del almacén.
        logout() {
            this.isLogin = false
            this.user = { email: '', permissions: [] }
        },
        login(user) {
            this.isLogin = true //Cambio isLogin a true.
            this.user = user //Actualiza User con datos del usuario proporcionados
        },
        hasPermissions(access) {
            return this.user.permiso == access //Verifica si el usuario tiene los permisos.
        },
        getUser(){
            return this.user //Devuelve el usuario. 
        }
    },
})