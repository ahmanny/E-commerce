import { useWishlistStore } from "@/store/wishlistStore";
import { useWishlistToggle } from "@/lib/utils/hooks/mutations/wishlist.mutations";
import { useFetchUserWishlist } from "@/lib/utils/hooks/queries/wishlist.queries";
import toast from "react-hot-toast";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { useLogin } from "@/lib/utils/hooks/mutations/auth.mutations";

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
    console.log("came");
    toast.success(`Sent to backend!`);
    wishlistToggle.mutate(
      { productId: productId },
      {
        onSuccess: () => {
          toast.success("came to success");
          console.log("success");
        },
      }
    );
  };

  return (
    <button
      type="button"
      onClick={() => addToWishlist()}
      className="px-4 border flex items-center justify-center rounded-md"
    >
      {isInWishlist ? (
        <GoHeartFill className="text-5xl" />
      ) : (
        <GoHeart className="text-5xl" />
      )}
    </button>
  );
}
