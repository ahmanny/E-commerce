import { useMutation } from "@tanstack/react-query";
import { destroyCookie, setCookie } from "nookies";
import API from "../../api/axios";
import { useCartStore } from "@/store/cartStore";
import { useSyncCartFromBackend } from "./cart.mutations";
import { useFetchUserCart } from "../queries/cart.queries";
import { useUserStore } from "@/store/userStore";
import { useFetchUserWishlist } from "../queries/wishlist.queries";




// wishilist toggle hook
export const useWishlistToggle = () => {
    // set user from the store
    const { refetch: fetchUserWishlist } = useFetchUserWishlist()

    return useMutation({
        mutationFn: async (credential: { productId: string }) => {
            const res = await API.post("/wishlist/toggle", credential);
            return res.data
        },
        // on success save user to zustand and save token to cookie using nookies
        onSuccess: (data) => {
            fetchUserWishlist()
        }
    })
}


// wishilist toggle hook
export const useWishlistDelete = () => {
    // set user from the store
    const { refetch: fetchUserWishlist } = useFetchUserWishlist()

    return useMutation({
        mutationFn: async (wishlistId: string) => {
            const res = await API.delete(`/wishlist/delete/${wishlistId}`);
            return res.data
        },
        // on success save user to zustand and save token to cookie using nookies
        onSuccess: (data) => {
            fetchUserWishlist()
        }
    })
}