import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: "https://fastapi-react-app-backend.onrender.com/",
});

export default api;
