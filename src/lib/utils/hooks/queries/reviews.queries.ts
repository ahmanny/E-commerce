import { useQuery } from "@tanstack/react-query";
import API from "../../api/axios";
import { productsinterface } from "@/lib/types/products.types";
import { reviewsInterface } from "@/lib/types/review.types";

// fetch a single product by ID and the reviews
export const useGetProductReviews = (id: string) =>
    useQuery({
        queryKey: ['product-reviews', id],
        queryFn: async () => {
            const res = await API.get<reviewsInterface[]>(`/review/product/${id}`)
            console.log("reviews:::::", res);

            return res.data
        },
        // only run if id exists
        enabled: !!id,
    })