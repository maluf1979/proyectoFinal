import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://6466a42f2ea3cae8dc1ba871.mockapi.io",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  async cargarLista() {
    try {
      const response = await apiClient.get("/paquetes");
      return response.data;
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async agregarElemento(elemento) {
    try {
      await apiClient.post("/paquetes", elemento);
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async eliminarElemento(id) {
    try {
      await apiClient.delete("/paquetes/" + id);
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async modificarElemento(id, elemento) {
    try {
      await apiClient.put(`/paquetes/${id}`, elemento);
    } catch (error) {
      throw "Error de conexion";
    }
  },
  async buscarPaquete(id){
    try{
      const response = apiClient.get("/paquetes/" + id)
      return response.data;
    } catch (error) {
      throw "Error de conexion";
    }
  }
};
