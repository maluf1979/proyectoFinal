import axios from "axios"; //Servicio llamado usuarioService, que utiliza Axios para realizar solicitudes HTTP a un API. 
const apiClient = axios.create({//Se crea una instancia de apiClient utilizando el método create de Axios. Esta instancia se configura con la URL base del API y los encabezados para aceptar y enviar datos en formato JSON.
  baseURL: "https://6466a42f2ea3cae8dc1ba871.mockapi.io",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default{ //Exporta un objeto con un método getUsuario.
    async getUsuario(email, passw){
        try {//Realiza una solicitud GET al API utilizando la instancia apiClient.
          const response = await apiClient.get(`/usuarios?email=${email}&contrasenia=${passw}`)
          return response.data;//La URL de la solicitud incluye los parámetros email y contrasenia,
        } catch (error) {      //que se utilizan para buscar un usuario específico en el API
            throw "No encontrado"
        }
      }
}
