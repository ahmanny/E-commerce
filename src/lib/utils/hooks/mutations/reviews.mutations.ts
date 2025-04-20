import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "../../api/axios";
import toast from "react-hot-toast";

// create order mutations
export const useAddReview = () => {
    const queryClient = useQueryClient();


    return useMutation({
        mutationFn: async (review: any) => {
            const res = await API.post("/review/add", review);
            return res.data;
        },
        // on success clear cart items
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["product-reviews"] });
            queryClient.invalidateQueries({ queryKey: ["product"] });
            console.log("sync successful:", data);
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })
}