import axios from "axios"

// Criei essa classe para simular uma camada de segurança entre a camada de banco e aplicação.
class Get {
    GetPosts() {
        return axios.get("https://localhost:3000/posts");
    }
}

const GetMethods = new Get;
export default GetMethods;
