import { useRouter } from "next/navigation";
import React from "react";
import { GoInbox } from "react-icons/go";
import { MdArrowForward } from "react-icons/md";

export default function NoItemFound() {
  const router = useRouter();
  return (
    <div className="w-full h-[304px] flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center gap-7 w-[300px]">
        <GoInbox className="text-8xl text-[#5C5F6A]" />
        <p className="text-gray-500 text-base items-center">
          Your order history is waiting to be filled.
        </p>
        <button
          type="button"
          onClick={() => router.push("/products/search")}
          className="btn flex gap-2 !w-1/2"
        >
          <span>Start Shopping</span>
          <MdArrowForward className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
