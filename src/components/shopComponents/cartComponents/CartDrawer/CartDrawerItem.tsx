import { CartItemInterface } from "@/lib/types/cart.types";
import { useCartStore } from "@/store/cartStore";

interface CartItemProps {
  item: CartItemInterface;
}

export default function CartDrawerItem({ item }: CartItemProps) {
  const { removeFromCart, updateQuantity } = useCartStore();

  return (
    <div className="flex items-center gap-20">
      {/* Product Image */}
      <div className="w-24 h-24 rounded-md overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center gap-3">
        {/* Product Details */}
        <div className=" flex gap-3">
          <h2 className="text-xl font-semibold capitalize">{item.title}</h2>
          <p className="text-gray-500 text-lg flex items-center gap-2">
            <span className="flex items-center gap-1">
              <span
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: item.color }}
              />
            </span>
            — {item.size}
          </p>
        </div>
        <div className="flex gap-8 items-center">
          {/* Quantity Selector */}
          <div className="flex items-center border rounded-md">
            <button
              onClick={() =>
                updateQuantity(item.uniqueId, Math.max(1, item.quantity - 1))
              }
              className="px-4 py-2 text-xl"
            >
              -
            </button>
            <span className="px-4 text-xl">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.uniqueId, item.quantity + 1)}
              className="px-4 py-2 text-xl"
            >
              +
            </button>
          </div>
          {/* Product Price */}
          <div className="text-xl font-bold mr-4">${item.price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
