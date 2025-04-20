import { useCartStore } from "@/store/cartStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "../../api/axios";


// sync cart hook 
export const useSyncCartFromBackend = () => {
    const queryClient = useQueryClient();

    const { clearCart } = useCartStore();

    return useMutation({
        mutationFn: async ({ items }: { items: any[] }) => {
            const res = await API.post("/cart/sync", items);
            return res.data;
        },
        // on success save user to zustand and save token to cookie using nookies
        onSuccess: (data) => {
            console.log("sync successful:", data);
            clearCart();
            queryClient.invalidateQueries({ queryKey: ["user-cart"] })
        },
        onError: (error) => {
            console.log("sync up failed:", error);
        }
    })
}

// add cart hook
export const useAddCartItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (items: any) => {
            const res = await API.post("/cart/add", items);
            return res.data;
        },
        // on success save user to zustand and save token to cookie using nookies
        onSuccess: (data) => {
            console.log("Cart successfully", data);
            queryClient.invalidateQueries({ queryKey: ["user-cart"] })
        },
        onError: (error) => {
            console.log(" failed:", error);
        }
    })
}

export const useDeleteCart = () => {
    const queryClient = useQueryClient();
    // reset user store after api calls
    return useMutation({
        mutationFn: async (id: any) => {
            const res = await API.delete(`/cart/delete/${id}`);
            return res.data;
        },
        // On success, refresh the cache to reflect deletion
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user-cart"] });
        },
        onError: (error) => {
            console.log("Product deletion failed:", error);
        }
    });
}