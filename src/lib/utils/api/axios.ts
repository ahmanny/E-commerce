import axios, { AxiosError } from "axios"
import { destroyCookie, parseCookies, setCookie } from "nookies";


// console.log("API:", process.env.NEXT_PUBLIC_API_URL)
const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/v1",
    // cookes are sent with requests if needed
    // withCredentials: true,
});

API.interceptors.request.use((config) => {
    const cookies = parseCookies();
    const token = cookies["access-token"];
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

API.interceptors.response.use(
    (response) => response.data,
    async (error) => {
        const originalRequest = error.config
        if(!(error instanceof AxiosError)){
            console.error("Unknown Error:",error)
            return Promise.reject({message:"An unknown error occured"})
        }
        // if access token is expired (401 unauthorised) and request is not already retried
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const cookies = parseCookies();
                const refresh_token = cookies["refresh_token"];
                if (!refresh_token) {
                    throw new Error("No refresh token available/found")
                }
                const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/refresh`, {
                    refresh_token,
                });
                // save the new access token to cookies
                setCookie(null, "access-token", data.tokens.access_token, { path: "/", maxAge: 60 * 300 });

                // retry the original request with the new token
                originalRequest.headers.Authorization = `Bearer ${data.tokens.access_token}`;
                return API(originalRequest)
            } catch (refreshError) {
                console.error("Token refresh failed:", refreshError)
                destroyCookie(null, "access_token")
                destroyCookie(null, "refresh_token")
                return Promise.reject(refreshError);

            }
            // console.error("error from backend:", error.response.data);
        }
        console.error("API error:", error.response?.data || error.message);
        return Promise.reject(error.response?.data || { message: "Network error, plaese try again later" });
    }
);

export default API;