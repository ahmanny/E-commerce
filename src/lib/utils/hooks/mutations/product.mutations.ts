import { Product } from "@/lib/types/products.types";
import { useMutation, useQueryClient } from "@tanstack/react-query"
import API from "../../api/axios";
import { useFetchCategories } from "../queries/categories.queries";

export const useCreateProduct = () => {
    const { refetch: fetchCategories, isError: categoriesError } = useFetchCategories()
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (product: any) => {
            const res = await API.post("/products/create", product);
            return res.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            fetchCategories()
        }
    })
}



// update Product hook
export const useUpdateProduct = () => {
    const { refetch: fetchCategories, isError: categoriesError } = useFetchCategories()
    const queryClient = useQueryClient();
    // reset user store after api calls
    return useMutation({
        mutationFn: async ({ id, product }: { id: string; product: any }) => {
            const res = await API.put(`/products/${id}/update`, product);
            return res.data;
        },
        // on success refresh tanstack query cache 
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            fetchCategories()
        }
    })
}
// delete Product hook
export const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    // reset user store after api calls
    return useMutation({
        mutationFn: async (id: string) => {
            const res = await API.delete(`/products/delete/${id}`);
            return res.data;
        },
        // On success, refresh the cache to reflect deletion
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
        }
    });
}