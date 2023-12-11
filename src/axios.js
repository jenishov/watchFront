import axios from "axios";

const instance = axios.create({
    baseURL:"https://watchdb.onrender.com"
})

export default instance