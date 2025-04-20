import { useCartStore } from "@/store/cartStore";
import { useMutation } from "@tanstack/react-query";
import API from "../../api/axios";
import { orderData } from "@/lib/types/order.types";
import toast from "react-hot-toast";

// create order mutations
export const useCreateOrder = () => {
    const { clearCart } = useCartStore();

    return useMutation({
        mutationFn: async (order: any) => {
            const res = await API.post("/order/create", order);
            return res.data;
        },
        // on success clear cart items
        onSuccess: (data) => {
            console.log("sync successful:", data);
            clearCart();
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })
}