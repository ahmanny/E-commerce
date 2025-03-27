import { useQuery } from "@tanstack/react-query";
import API from "../../api/axios";
import { Product, productsinterface } from "@/lib/types/productsTypes";



// fetch all users
export const useGetAllProducts = () =>
    useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await API.get<productsinterface[]>("/products/all-products");
            console.log(res.data);
            return res.data
        }
    })


// fetch a single user by ID
export const useGetProduct = (id: string) =>
    useQuery({
        queryKey: ['product', id],
        queryFn: async () => {
            const res = await API.get(`/products/${id}`)
            console.log(res.data);

            return res.data.product
        },
        // only run if id exists
        enabled: !!id,
        // 8 minutes before refetching
        staleTime: 8 * 60 * 1000,
        // 10 minutes before removing cache

    })