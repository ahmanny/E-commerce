import axios from "axios"
import { parseCookies } from "nookies";

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/v1/authentication/login",
    // cookes are sent with requests if needed
    withCredentials: true,
});

API.interceptors.request.use((config) => {
    const cookies = parseCookies();
    const token = cookies["tokens"];
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            console.error("error from backend:", error.response.data);
            return Promise.reject(error.response.data);
        }
        console.error("network error:", error.message);
        return Promise.reject({ message: "Network error, plaese try again later" });
    }
);

export default API;