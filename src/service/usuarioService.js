import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://6466a42f2ea3cae8dc1ba871.mockapi.io",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default{
    async getUsuario(email, passw){
        try {
          const response = await apiClient.get(`/usuarios?email=${email}&contrasenia=${passw}`)
          return response.data;
        } catch (error) {
            throw "No encontrado"
        }
      }
}
