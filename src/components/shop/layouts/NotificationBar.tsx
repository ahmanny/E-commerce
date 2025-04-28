"use client";

import { Link } from "lucide-react";
import React from "react";

export default function NotificationBar() {
  return (
    <div className=" bg-[#0E1422] w-full h-[40px] flex justify-center items-center text-white gap-1 mb-4">
      <p>Get 25% OFF on your first order</p> <Link href="#"> Order Now</Link>
    </div>
  );
}
