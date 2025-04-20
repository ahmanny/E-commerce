import { StoreCartItem, useCartStore } from "@/store/cartStore";
import { useQuery } from "@tanstack/react-query";
import API from "../../api/axios";
import { useUserStore } from "@/store/userStore";

export const useFetchUserCart = () => {
  const { setCartItems } = useCartStore();
  const { user } = useUserStore();

  const {
    data: items,
    isSuccess,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["user-cart"],
    queryFn: async () => {
      const { data } = await API.get("/cart/get");
      const transformedItems: StoreCartItem[] = data.cart.items.map(
        (item: any) => ({
          id: item._id,
          uniqueId: `${item.productId._id}-${item.color}-${item.size}`,
          productId: item.productId._id,
          title: item.productId.title,
          price: item.productId.price,
          quantity: item.quantity,
          image: item.productId.images[0],
          color: item.color,
          size: item.size,
        })
      );
      setCartItems(transformedItems);
      return transformedItems;
      // return data.cart.items;
    },
    enabled: !!user,
    gcTime: Infinity,
    staleTime: 1000 * 60 * 5,
  });
  return { items, isSuccess, isLoading, isError, refetch };
};
