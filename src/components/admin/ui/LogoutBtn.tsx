"use client";

import { logout } from "@/lib/utils/logout.util";
import { useState } from "react";
import { TbLogout } from "react-icons/tb";
import { useRouter } from "next/navigation";
import Spinner from "@/components/states/LoadingStates/Spinner";

export default function LogoutBtn() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    setLoading(true);

    // Simulate the logout process and hide the loader after 4 seconds
    setTimeout(() => {
      logout(); // Call the refactored logout function
      setLoading(false);
      router.push("/admin/login");
    }, 4000);
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="text-[#5C5F6A] flex hover:bg-[#F6F6F6] items-center rounded-md "
      >
        {loading ? (
          <Spinner /> // Show spinner during logout
        ) : (
          <>
            <TbLogout className="text-2xl" />
          </>
        )}
      </button>
    </div>
  );
}
