"use client";

import { useWishlistStore } from "@/store/wishlistStore";
import { useWishlistToggle } from "@/lib/utils/hooks/mutations/wishlist.mutations";
import toast from "react-hot-toast";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { Loader2 } from "lucide-react";

type AddToWishListButtonProps = {
  productId: string;
};

export default function AddToWishListButton({
  productId,
}: AddToWishListButtonProps) {
  const wishlistToggle = useWishlistToggle();
  const { items: wishlistItems } = useWishlistStore(); // Access items and setItems
  // Check if the product is in the wishlist
  const isInWishlist = wishlistItems.some(
    (item) => item.productId === productId
  );

  // Toggle wishlist function
  const addToWishlist = () => {
    wishlistToggle.mutate(
      { productId: productId },
      {
        onSuccess: () => {
          toast.success("Product successfully added!");
        },
      }
    );
  };

  return (
    <button
      type="button"
      onClick={() => {
        if (!wishlistToggle.isPending) addToWishlist();
      }}
      disabled={wishlistToggle.isPending}
      className="px-4 border flex items-center justify-center rounded-md disabled:opacity-50 disabled:cursor-progress"
    >
      {wishlistToggle.isPending ? (
        <Loader2 className="animate-spin w-12 h-12" />
      ) : isInWishlist ? (
        <GoHeartFill className="text-5xl" />
      ) : (
        <GoHeart className="text-5xl" />
      )}
    </button>
  );
}
