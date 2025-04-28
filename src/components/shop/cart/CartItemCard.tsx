import { CartItemInterface } from "@/lib/types/cart.types";
import { useDeleteCart } from "@/lib/utils/hooks/mutations/cart.mutations";
import { useCartStore } from "@/store/cartStore";
import { useUserStore } from "@/store/userStore";
import toast from "react-hot-toast";
import { FiX } from "react-icons/fi";

interface CartItemProps {
  item: CartItemInterface;
}

export default function CartItem({ item }: CartItemProps) {
  const { removeFromCart, updateQuantity } = useCartStore();
  const { isLoggedIn } = useUserStore();
  const deleteCartMutation = useDeleteCart();
  const deleteCart = () => {
    if (isLoggedIn) {
      deleteCartMutation.mutate(item.uniqueId, {
        onSuccess: () => {
          removeFromCart(item.uniqueId);
          toast.success("Item deleted");
        },
        onError: (error) => {
          toast.error(error.message);
        },
      });
    } else {
      removeFromCart(item.uniqueId);
      toast.success("Item deleted");
    }
  };

  return (
    <div className="flex items-center justify-between  p-5 mb-4">
      {/* Product Image */}
      <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 px-4">
        <h2 className="text-lg font-semibold capitalize">{item.title}</h2>
        <p className="text-gray-500 text-sm flex items-center gap-2">
          <span className="flex items-center gap-1">
            Color:
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: item.color }}
            />
          </span>
          — Size: {item.size}
        </p>
      </div>

      {/* Product Price */}
      <div className="text-lg font-bold mr-4">${item.price.toFixed(2)}</div>

      {/* Quantity Selector */}
      <div className="flex items-center border rounded-md">
        <button
          onClick={() =>
            updateQuantity(item.uniqueId, Math.max(1, item.quantity - 1))
          }
          className="px-3 py-1 text-lg"
        >
          -
        </button>
        <span className="px-4">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.uniqueId, item.quantity + 1)}
          className="px-3 py-1 text-lg"
        >
          +
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={deleteCart}
        className="ml-4 text-gray-500 hover:text-red-500 bg-[#f6f6f6] p-1 rounded-md"
      >
        <FiX size={24} />
      </button>
    </div>
  );
}
