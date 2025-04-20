"use client";

import { Avatar } from "@chakra-ui/react";
import { useState } from "react";
import ColorSelector from "../products/ColorSelector";
import { productsinterface } from "@/lib/types/products.types";
import { useForm } from "react-hook-form";
import { useAddCartItem } from "@/lib/utils/hooks/mutations/cart.mutations";
import { BeatLoader } from "react-spinners";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import toast from "react-hot-toast";
import { useUserStore } from "@/store/userStore";
import { useCartStore } from "@/store/cartStore";
import { WishlistItem } from "@/lib/types/wishlist.types";
import { useWishlistDelete } from "@/lib/utils/hooks/mutations/wishlist.mutations";
import SizeSelector from "../Product.tsx/ProductOptions/SizeSelector";
import QuantitySelector from "../Product.tsx/ProductOptions/QuantitySelector";
import ColorPicker from "../Product.tsx/ProductOptions/ColorPicker";

export interface item {
  title: string;
  image: string;
  price: number;
  color?: string;
  size?: string;
  date: string;
  orderStatus?: string;
}

interface ItemProps {
  item: WishlistItem;
  date: string;
}
type wishlistFormData = {
  color: string;
  size: string;
  quantity: number;
};

const steps = ["color", "size", "quantity"];

export default function WhishlistItemCard({ item, date }: ItemProps) {
  const addCartItem = useAddCartItem();
  const wishlistDelete = useWishlistDelete();
  const { user } = useUserStore();
  const { addToCart } = useCartStore();
  //   use form functions
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<wishlistFormData>({
    defaultValues: {
      size: "",
      color: "",
      quantity: 1,
    },
  });
  //   consts
  const [isLoading, setIsLoading] = useState(false);
  const quantity = watch("quantity");
  const selectedColor = watch("color");
  const selectedSizes = watch("size");
  const [step, setStep] = useState(0);
  // submit and next function logic
  const onSubmit = (data: wishlistFormData) => {
    // check if color,size,quantity was selected
    if (step === 1 && !data.color) {
      toast.error("Please select a color");
      return;
    }

    if (step === 2 && !data.size) {
      toast.error("Please select a size");
      return;
    }

    if (step === 3 && (!data.quantity || data.quantity <= 0)) {
      toast.error("Please enter a valid quantity");
      return;
    }

    if (step < steps.length) {
      // if length is less than steps.length go to next step
      setStep(step + 1);
    } else {
      // else submit the form
      setIsLoading(true);
      const variantId = `${item._id}-${data.color}-${data.size}`;
      const cartItem = {
        uniqueId: variantId,
        productId: item.productId,
        title: item.title,
        price: item.price,
        quantity: data.quantity,
        image: item.image,
        color: data.color,
        size: data.size,
      };
      if (user) {
        toast.success(`sent to backend!`);
        addCartItem.mutate(cartItem, {
          onSuccess: () => {
            reset(); // Reset form values after adding to cart
            toast.success(`${cartItem.title} added to cart!`);
            addToCart(cartItem);
            setIsLoading(false);
            setStep(0);
          },
        });
      } else {
        addToCart(cartItem); // Add to Zustand store
        reset(); // Reset form values after adding to cart
        toast.success(`${cartItem.title} added to cart!`);
        setIsLoading(false);
        setStep(0);
      }
    }
  };

  const removeItem = () => {
    // remove item from wishlist
    const wishlistId = item._id;
    wishlistDelete.mutate(wishlistId, {
      onSuccess: () => {
        toast.success(`Product removed from wishlist`);
      },
    });

    console.log("deleted");
  };
  return (
    <div className=" w-[620px] ">
      <div className="flex items-center justify-between mb-4">
        {/* Product Image */}
        <div className="w-[80px] h-[80px] rounded-md overflow-hidden bg-gray-100">
          <Avatar.Root shape="rounded" size="full" colorPalette={"blue"}>
            <Avatar.Fallback name={item.title} />
            <Avatar.Image src={item.image} />
          </Avatar.Root>
        </div>

        {/* Product Details */}
        <div className="flex-1 px-4">
          <h2 className="text-lg font-semibold capitalize">{item.title}</h2>
          <p className="text-gray-500 text-base flex items-center gap-2">
            {"Added on: "}
            {date}
          </p>

          <button type="button" onClick={removeItem}>
            Remove Item
          </button>
        </div>
        <div className="flex gap-7 justify-center items-center capitalize">
          {/* Product Price */}
          <div className="text-lg font-bold mr-4">${item.price.toFixed(2)}</div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-2 items-center"
          >
            {/* initial state  */}
            {step === 0 && (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="border border-black py-[8px] px-[18px] capitalize rounded-lg"
              >
                Add to cart
              </button>
            )}
            {/* select color */}
            {step === 1 && (
              <>
                <ColorPicker
                  colors={item.colors}
                  selectedColor={selectedColor}
                  setSelectedColor={(color) => setValue("color", color)}
                />
              </>
            )}
            {/* select size */}
            {step === 2 && (
              <>
                <SizeSelector
                  sizes={item.sizes}
                  selectedSize={selectedSizes}
                  setSelectedsize={(size) => setValue("size", size)}
                />
              </>
            )}
            {step === 3 && (
              <QuantitySelector
                quantity={quantity}
                setQuantity={(value) => setValue("quantity", value)}
              />
            )}
            <div>
              {step > 0 && step < steps.length + 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="border border-black py-3 px-4 capitalize rounded-lg"
                >
                  <IoIosArrowBack />
                </button>
              )}
              {step > 0 && (
                <button
                  type="submit"
                  //   onClick={() => setStep(step + 1)}
                  className="border border-black py-3 px-4 capitalize rounded-lg"
                >
                  {step < steps.length + 1 ? (
                    <IoIosArrowForward />
                  ) : isLoading ? (
                    <BeatLoader color="#1e1616" />
                  ) : (
                    "Add to cart"
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <hr />
    </div>
  );
}
