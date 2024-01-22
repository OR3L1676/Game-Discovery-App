import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a0de5157f94c4fe1a5a1755f86806e7d'
    }
})