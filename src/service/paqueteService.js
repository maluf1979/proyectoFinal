//Modulo de servicio para realizar operaciones relacionadas con paquetes utilizando Axios para hacer solicitudes HTTP a una API mock.

import axios from "axios"; 
const apiClient = axios.create({ //Se crea una instancia de Axios llamada apiClient utilizando axios.create(). 
  baseURL: "https://6466a42f2ea3cae8dc1ba871.mockapi.io",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default { //exporta un objeto con varios métodos para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) relacionadas con paquetes.
  async cargarLista() {
    try {
      const response = await apiClient.get("/paquetes"); //Solicitud GET.
      return response.data;
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async agregarElemento(elemento) {
    try {
      await apiClient.post("/paquetes", elemento); //Solicitud POST.
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async eliminarElemento(id) {
    try {
      await apiClient.delete("/paquetes/" + id); //Solicitud DELETE.
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async modificarElemento(id, elemento) {
    try {
      await apiClient.put(`/paquetes/${id}`, elemento); //Solicitud PUT.
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async buscarPaquete(id){
    try{
      const response = await apiClient.get("/paquetes/" + id) //Solicitud GET.
      return response.data;
    } catch (error) {
      throw "Error de conexion";
    }
  },

};
