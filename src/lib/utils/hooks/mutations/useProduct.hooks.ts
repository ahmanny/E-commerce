import { Product } from "@/lib/types/productsTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import API from "../../api/axios";

export const useCreateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (credential: any) => {
            console.log(credential);
            const res = await API.post("/products/create", credential);
            return res.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
        onError: (error) => {
            console.log("Product failed to create:", error);
        },
    })
}



// update Product hook
export const useUpdateProduct = () => {
    const queryClient = useQueryClient();
    // reset user store after api calls
    return useMutation({
        mutationFn: async ({ id, product }: { id: string; product: any }) => {
            const res = await API.patch(`/products/${id}/update`, product);
            return res.data;
        },
        // on success refresh tanstack query cache 
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
        onError: (error) => {
            console.log("product update failed:", error);
        }
    })
}