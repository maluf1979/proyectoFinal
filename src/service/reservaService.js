import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://64826c95f2e76ae1b95b3d93.mockapi.io",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default{
    async crearReserva(paquete, usuarioId){
        try {
          const reserva = {paquete:paquete, usuarioId:usuarioId}
            await apiClient.post("/reservas", reserva);
          } catch (error) {
            throw "Error de conexion";
          }
    },
    async cargarMisReservas(usuarioId){
      try {
        const response = await apiClient.get("/reservas?usuarioId=" + usuarioId);
        //console.log(response.data);
        return response.data;       
      } catch (error) {
        throw "Error de conexion";
      }
    }
}