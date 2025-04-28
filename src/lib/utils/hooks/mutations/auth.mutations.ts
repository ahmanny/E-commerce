import { useMutation } from "@tanstack/react-query";
import { destroyCookie, setCookie } from "nookies";
import API from "../../api/axios";
import { useCartStore } from "@/store/cartStore";
import { useSyncCartFromBackend } from "./cart.mutations";
import { useFetchUserCart } from "../queries/cart.queries";
import { useUserStore } from "@/store/userStore";
import { useFetchUserWishlist } from "../queries/wishlist.queries";
import { useFetchCategories } from "../queries/categories.queries";



// sign up hook 
export const useSignup = () => {
    const { setUser, setIsLoggedIn } = useUserStore()
    const { refetch: fetchCategories, isError: categoriesError } = useFetchCategories()


    return useMutation({
        mutationFn: async (credential: { name: string, email: string, password: string }) => {
            const res = await API.post("/authentication/sign-up", credential);
            return res.data;
        },
        // on success save user to zustand and save token to cookie using nookies
        onSuccess: (data) => {
            // save the access token 
            setCookie(null, "access-token", data.tokens.access_token, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
                secure: process.env.NODE_ENV === "production",
            });
            setCookie(null, "refresh-token", data.tokens.refresh_token, { path: "/", maxAge: 60 * 60 * 24 * 7 });
            // save the user role
            setCookie(null, "user-role", data.user.role, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });
            setUser(data.user)
            setIsLoggedIn(true)
            fetchCategories()
        }
    })
}

// login hook
export const useLogin = () => {
    // set user from the store
    const { setUser, setIsLoggedIn } = useUserStore()
    const { items } = useCartStore()
    const syncCartFromBackend = useSyncCartFromBackend()
    const { refetch: fetchUserCart, isError: cartError } = useFetchUserCart();
    const { refetch: fetchUserWishlist, isError: wishlistError } = useFetchUserWishlist()
    const { refetch: fetchCategories, isError: categoriesError } = useFetchCategories()

    return useMutation({
        mutationFn: async (credential: { email: string, password: string }) => {
            const res = await API.post("/authentication/login", credential);
            return res.data
        },
        // on success save user to zustand and save token to cookie using nookies
        onSuccess: (data) => {
            // save the access token 
            setCookie(null, "access-token", data.tokens.access_token, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
                secure: process.env.NODE_ENV === "production",
            });
            // save the refresh token
            setCookie(null, "refresh-token", data.tokens.refresh_token, { path: "/", maxAge: 60 * 60 * 24 * 7 });
            // save the user role
            setCookie(null, "user-role", data.user.role, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });
            setUser(data.user)
            setIsLoggedIn(true)
            if (items.length !== 0) {
                // if there are items in the cart, sync them with the backend
                syncCartFromBackend.mutateAsync({ items })
            }


            fetchCategories()
            fetchUserCart()
            fetchUserWishlist()
            if (cartError || wishlistError || categoriesError) {
                console.log("Failed to login");
            }
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
        }
    })
}



// log out hook 
// export const useLogout = () => {
//     const setUser = useUserStore((state) => state.setUser)

//     return useMutation({
//         mutationFn: async () => {
//             await API.post("/authentication/logout");
//         },
//         // on success set  user to null and destroy tokens in nookies
//         onSuccess: () => {
//             destroyCookie(null, "access-token")
//             destroyCookie(null, "refresh-token")
//             setUser(null)
//         },
//         onError: (error) => {
//             console.error("failed to logout:", error)
//         }
//     })
// }






// Admin login hook
export const useAdminLogin = () => {
    const { refetch: fetchCategories, isError: categoriesError } = useFetchCategories()
    // set user from the store
    const setUser = useUserStore((state) => state.setUser);
    return useMutation({
        mutationFn: async (credential: { email: string, password: string }) => {
            const res = await API.post("/authentication/login", credential);
            return res.data
        },
        // on success save user to zustand and save token to cookie using nookies
        onSuccess: (data) => {
            // save the access token 
            setCookie(null, "access-token", data.tokens.access_token, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
                secure: process.env.NODE_ENV === "production",
            });
            // save the refresh token
            setCookie(null, "refresh-token", data.tokens.refresh_token, { path: "/", maxAge: 60 * 60 * 24 * 7 });
            // save the user role
            setCookie(null, "user-role", data.user.role, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            });
            setUser(data.user)
            fetchCategories()
        },
        onError: (error) => {
            console.error("Login failed:", error)
        }
    })
}
