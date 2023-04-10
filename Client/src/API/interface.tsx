import axios from "axios";
export const InterFace = axios.create({
    baseURL : "http://localhost:5000/api"
})