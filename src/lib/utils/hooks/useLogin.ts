import { useAuthStore } from "@/store/auth"
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "nookies";
import path from "path";




export const useLogin = () => {
    // set user from the store
    const setUser = useAuthStore((state) => state.setUser);

    // return useMutation({
    //     mutationFn: loginFunction,
    //     onSuccess: ({ token, user }) => {
    //         setCookie(null, "tokens", token, { path: "/" });
    //         setUser(user)
    //     }
    // })
}