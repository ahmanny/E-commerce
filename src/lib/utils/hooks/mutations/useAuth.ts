import { useAuthStore } from "@/store/auth"
import { useMutation } from "@tanstack/react-query";
import { destroyCookie, setCookie } from "nookies";
import API from "../../api/axios";
import path from "path";



// sign up hook 
export const useSignup = () => {
    const setUser = useAuthStore((state) => state.setUser);

    return useMutation({
        mutationFn: async (credential: { name: string, email: string, password: string }) => {
            const res = await API.post("/authentication/sign-up", credential);
            return res.data;
        },
        // on success save user to zustand and save token to cookie using nookies
        onSuccess: (data) => {
            setCookie(null, "access-token", data.tokens.access_token, { path: "/", maxAge: 60 * 30 });
            setCookie(null, "refresh-token", data.tokens.refresh_token, { path: "/", maxAge: 60 * 60 * 24 * 7 });
            setUser(data.user)
        },
        onError: (error) => {
            console.log("sign up failed:", error);
        }
    })
}

// login hook
export const useLogin = () => {
    // set user from the store
    const setUser = useAuthStore((state) => state.setUser);

    return useMutation({
        mutationFn: async (credential: { email: string, password: string }) => {
            const res = await API.post("/authentication/login", credential);
            return res.data
        },
        // on success save user to zustand and save token to cookie using nookies
        onSuccess: (data) => {
            setCookie(null, "access-token", data.tokens.access_token, { path: "/", maxAge: 60 * 30 });
            setCookie(null, "refresh-token", data.tokens.refresh_token, { path: "/", maxAge: 60 * 60 * 24 * 7 });
            setUser(data.user)
        },
        onError: (error) => {
            console.error("Login failed:", error)
        }
    })
}


// forgotten password hook
export const useFogottenPassword = () => {
    return useMutation({
        mutationFn: async (credential: { email: string }) => {
            const res = await API.post("/authentication/forgotten-password", credential)
            return res.data
        },
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.error("reset password failed:", error);
        }
    })
}


// reset password hook
export const useResetPassword = () => {
    return useMutation({
        mutationFn: async (credential: { newPassword: string, token: string }) => {
            const res = await API.post("/authentication/reset-password", credential)
            return res.data
        },
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.error("reset password failed:", error);
        }
    })
}



// log out hook 
export const useLogout = () => {
    const setUser = useAuthStore((state) => state.setUser)

    return useMutation({
        mutationFn: async () => {
            await API.post("/authentication/logout");
        },
        // on success set  user to null and destroy tokens in nookies
        onSuccess: () => {
            destroyCookie(null, "access-token")
            destroyCookie(null, "refresh-token")
            setUser(null)
        },
        onError: (error) => {
            console.error("failed to logout:", error)
        }
    })
}
