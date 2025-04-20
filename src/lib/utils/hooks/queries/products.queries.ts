import { useQuery } from "@tanstack/react-query";
import API from "../../api/axios";
import { productsinterface } from "@/lib/types/products.types";


interface GetProductResponse {
    product: productsinterface
}
// fetch all products
export const useGetAllProducts = () =>
    useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await API.get<productsinterface[]>("/products/all-products");
            return res.data
        }
    })


// fetch a single product by ID
export const useGetProduct = (id: string) =>
    useQuery({
        queryKey: ['product', id],
        queryFn: async () => {
            const { data } = await API.get<GetProductResponse>(`/products/${id}`)
            return data.product
        },
        // only run if id exists
        enabled: !!id,
    })