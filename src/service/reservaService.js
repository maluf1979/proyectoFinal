//Módulo para realizar operaciones relacionadas con reservas utilizando Axios para hacer solicitudes HTTP
import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://64826c95f2e76ae1b95b3d93.mockapi.io",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default{ //Exporta un objeto con tres métodos para realizar operaciones. 
    async crearReserva(paquete, usuarioId){//Realiza una solicitud POST a la URL /reservas para crear una nueva reserva.
        try {                              //El objeto reserva contiene los datos de la reserva, como el paquete y el ID del usuario. Los datos se envían en el cuerpo de la solicitud.
          const reserva = {paquete:paquete, usuarioId:usuarioId}
            await apiClient.post("/reservas", reserva);
          } catch (error) {
            throw "Error de conexion";
          }
    },
    async cargarMisReservas(usuarioId){//Realiza una solicitud GET a la URL /reservas?usuarioId=:usuarioId para obtener todas las reservas asociadas a un usuario específico.
      try {                            // El parámetro usuarioId se concatena a la URL para filtrar las reservas por ese ID de usuario. Retorna los datos de las reservas obtenidas.
        const response = await apiClient.get("/reservas?usuarioId=" + usuarioId);
        //console.log(response.data);
        return response.data;       
      } catch (error) {
        throw "Error de conexion";
      }
    },
    async eliminarReserva(id) {
      try {
        await apiClient.delete("/reservas/" + id);
      } catch (error) {
        throw "Error de conexion";
      }
    }
}