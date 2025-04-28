import { useQuery } from "@tanstack/react-query";
import API from "../../api/axios";



// fetch  user orders
export const useGetUserOrders = () =>
    useQuery({
        queryKey: ["user-orders"],
        queryFn: async () => {
            const res = await API.get("/order/get-user-orders");
            return res.data
        }
    })


// fetch all orders
export const useGetAllOrders = () =>
    useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            const res = await API.get("/order/all-orders");
            return res.data
        }
    })



// fetch a single user order by ID
export const useGetOrder = (id: string) =>
    useQuery({
        queryKey: ['an-order', id],
        queryFn: async () => {
            const res = await API.get(`/order/get/${id}`)
            return res.data
        },
        // only run if id exists
        enabled: !!id,
    })