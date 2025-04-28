"use client";

import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoPersonOutline } from "react-icons/io5";
import Navs from "@/components/Navs";
import { RiKey2Line } from "react-icons/ri";
import { BsTruck } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import { logout } from "@/lib/utils/logout.util";
import { useState } from "react";
import Loader from "@/components/states/LoadingStates/Spinner";
import { useRouter } from "next/navigation";

const adminDashBoardNavs = [
  { title: "orders", href: "/orders", icon: <TiShoppingCart /> },
  { title: "wishlist", href: "/wishlist", icon: <FaRegHeart /> },
  { title: "address", href: "/address", icon: <BsTruck /> },
  { title: "password", href: "/change-password", icon: <RiKey2Line /> },
  {
    title: "account detail",
    href: "/account-detail",
    icon: <IoPersonOutline />,
  },
];

export default function ProfileNavBar() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    setLoading(true);

    // Simulate the logout process and hide the loader after 4 seconds
    setTimeout(() => {
      logout(); // Call the refactored logout function
      setLoading(false);
      router.push("/");
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center w-full py-10 border-r">
      <div className="w-full">
        <div className="flex flex-col gap-4">
          <Navs parentHref="/my-account" navs={adminDashBoardNavs} />
          <button
            onClick={handleLogout}
            className="capitalize text-[#5C5F6A] flex h-[51px] w-[212px] mx-auto px-4 gap-3 hover:bg-[#F6F6F6] items-center rounded-md "
          >
            {loading ? (
              <Loader /> // Show loader during logout
            ) : (
              <>
                <TbLogout className="text-3xl" />
                <span className="text-[20px]">Logout</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
