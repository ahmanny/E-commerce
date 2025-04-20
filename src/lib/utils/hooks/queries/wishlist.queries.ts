import { useQuery } from "@tanstack/react-query";
import API from "../../api/axios";
import { useEffect, useState } from "react";
import { useUserStore } from "@/store/userStore";
import { WishlistItem } from "@/lib/types/wishlist.types";
import { useWishlistStore } from "@/store/wishlistStore";

export const useFetchUserWishlist = () => {
    const { user } = useUserStore();
    const { setItems } = useWishlistStore()
    const [error, setError] = useState<string | null>(null);

    const {
        data: wishlist,
        isSuccess,
        isLoading,
        isError,
        refetch,
    } = useQuery({
        queryKey: ["user-wishlist"],
        queryFn: async () => {
            try {
                const { data } = await API.get("/wishlist/get");
                console.log(data);

                // Transform each item into the structure the wishlist store needs
                const transformedItems: WishlistItem[] = data.wishlist.items.map(
                    (item: any) => ({
                        _id: item._id,
                        productId: item.productId._id,
                        addedAt: item.addedAt,
                        title: item.productId.title,
                        image: item.productId.images[0],
                        price: item.productId.price,
                        colors: item.productId.colors,
                        sizes: item.productId.sizes,
                    })
                );
                setItems(transformedItems)
                return transformedItems;
            } catch (err) {
                setError("Failed to fetch wishlist. Please try again.");
                throw err;
            }
        },
        enabled: !!user, // Only run query if the user is available
        staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    });

    return { wishlist, isSuccess, isLoading, error, isError, refetch };
};
