import axios from "axios";
let server = axios.create({
    baseURL:'/api',
    timeout:7000,
})

export default server