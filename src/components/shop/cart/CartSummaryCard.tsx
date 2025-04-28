"use client";
import React, { useState } from "react";
import Summary from "./Summary";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function CartSummaryCard() {
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();
  const submitCart = (e: React.FormEvent<HTMLFormElement>) => {
    setIsloading(true);
    e.preventDefault();
    // your submission logic here
    router.push("/check-out");
    // You can also use a toast notification here to inform the user
    setIsloading(false);
  };
  return (
    <form onSubmit={submitCart} className="border p-8 rounded-lg ">
      <h2 className="text-lg font-semibold pb-5">Order Summary</h2>
      <Summary submitBtnText="Checkout" isLoading={isLoading} />
    </form>
  );
}
