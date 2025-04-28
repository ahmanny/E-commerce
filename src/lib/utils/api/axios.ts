import axios, { AxiosError } from "axios";
import { destroyCookie, parseCookies, setCookie } from "nookies";

// Create Axios instance
const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Request interceptor – attach access token from cookies
API.interceptors.request.use((config) => {
    const cookies = parseCookies();
    const token = cookies["access-token"]; // 🔁 fixed: key should match setCookie
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Response interceptor – auto-refresh access token on 401
API.interceptors.response.use(
    (response) => response.data,
    async (error) => {
        const originalRequest = error.config;

        if (!(error instanceof AxiosError)) {
            console.error("Unknown Error:", error);
            return Promise.reject({ message: "An unknown error occurred" });
        }

        // Handle expired/invalid access token
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const cookies = parseCookies();
                const refresh_token = cookies["refresh-token"]; // refresh_token must be stored in cookies

                if (!refresh_token) {
                    throw new Error("No refresh token found");
                }

                const { data } = await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL}/authentication/refresh-token`,
                    { refresh_token }
                );
                console.log(data);


                const newAccessToken = data.data.tokens.access_token;

                // Store new access token in cookies
                setCookie(null, "access-token", newAccessToken, {
                    path: "/",
                    maxAge: 60 * 60 * 4, // 1 hour
                });

                setCookie(null, "refresh-token", data.data.tokens.refresh_token, { path: "/", maxAge: 60 * 60 * 24 * 7 });

                // Retry the original request with new token
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return API(originalRequest);
            } catch (refreshError) {
                console.error("Token refresh failed:", refreshError);

                // Clear cookies and optionally redirect user to login
                destroyCookie(null, "access-token");
                destroyCookie(null, "refresh-token");

                return Promise.reject({
                    message: "Session expired. Please log in again.",
                });
            }
        }

        console.error("API error:", error.response?.data || error.message);
        return Promise.reject(
            error.response?.data || { message: "Network error. Please try again later." }
        );
    }
);

export default API;
