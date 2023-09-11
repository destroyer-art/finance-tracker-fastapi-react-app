import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    // baseURL: "https://fastapi-react-app-backend.onrender.com/",
    baseURL: 'http://127.0.0.1:8000/',
});

export default api;
