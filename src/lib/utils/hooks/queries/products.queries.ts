import { useQuery } from "@tanstack/react-query";
import API from "../../api/axios";
import { productsinterface } from "@/lib/types/products.types";



interface GetHomeProductResponse {
    featured: productsinterface[]
    bestSelling: productsinterface[]
    latest: productsinterface[]
}

interface GetProductResponse {
    product: productsinterface
}
interface GetSimilarProductResponse {
    similarProducts: productsinterface[]
}



// fetch products related to a product
export const useGetHomeProducts = () =>
    useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await API.get<GetHomeProductResponse>("/products/home-products");
            console.log(res);

            return res.data
        }
    })
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


// fetch products related to a product
export const useGetSimilarProducts = (id: string) =>
    useQuery({
        queryKey: ['similar-products', id],
        queryFn: async () => {
            const { data } = await API.get<GetSimilarProductResponse>(`/products/${id}/similar`)
            return data.similarProducts
        },
        // only run if id exists
        enabled: !!id,
    })
