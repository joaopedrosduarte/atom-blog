import axios from "axios";

// Criei essa classe para simular uma camada de segurança entre a camada de banco e aplicação.
class Get {
  GetPosts() {
    // Conexão não tão segura sem HTTPs, mas é apenas um exemplo.
    return axios.get("http://localhost:3000/posts");
  }
}

const GetMethods = new Get();
export default GetMethods;
