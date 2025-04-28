"use client";

import React, { useEffect } from "react";
import ShippingForm from "./ShippingForm";
import OrderSummaryCard from "./OrderSummary";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCartStore } from "@/store/cartStore";
import toast from "react-hot-toast";
import { useCreateOrder } from "@/lib/utils/hooks/mutations/order.mutations";
import { useUserStore } from "@/store/userStore";

const shippingSchema = z.object({
  name: z.string().min(3, "Enter your Full Name "),
  email: z.string().email("invalid Email"),
  address: z.string().min(3, "Enter your Address"),
  city: z.string().min(1, "Enter your City"),
  state: z.string().min(3, "Enter your State"),
  zipCode: z.string().min(3, "Enter your Zip Code"),
  country: z.string().min(3, "Please select your Country"),
});

type ShippingFormData = z.infer<typeof shippingSchema>;

export default function CheckOut() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  });
  const createOrderMutation = useCreateOrder();
  const { user } = useUserStore();
  const { items, clearCart } = useCartStore();

  // Calculate total
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;
  // ✅ Prefill form when user data is available
  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        address: user.shippingAddress?.address,
        city: user.shippingAddress?.city,
        state: user.shippingAddress?.state,
        zipCode: user.shippingAddress?.zipCode,
        country: user.shippingAddress?.country,
      });
    }
  }, [user, reset]);
  // function to handle submit form click.
  function submitForm(data: ShippingFormData) {
    const orderData = {
      shippingDetails: data,
      items: items,
      summary: {
        subtotal,
        tax,
        total,
      },
    };
    toast.success("sent to backend successfully!");
    console.log("Submitting Order:", orderData);
    createOrderMutation.mutate(orderData, {
      onSuccess: () => {
        toast.success("Order placed successfully!");
        clearCart();
      },
    });
    console.log("here");
  }
  return (
    <form onSubmit={handleSubmit(submitForm)} className="flex py-14 gap-52">
      {/* Left: Shipping form */}
      <div className="w-[600px]">
        <h3 className="text-lg font-bold h-12 border-b">Shipping Address</h3>
        <div className=" py-16">
          <ShippingForm register={register} errors={errors} />
        </div>
      </div>
      {/* Right: Summary with submit button */}
      <div className="flex-1">
        <OrderSummaryCard isLoading={createOrderMutation.isPending} />
      </div>
    </form>
  );
}
