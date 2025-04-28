"use client";

import BreadcrumbMain from "@/components/breadcrumbs/BreadcrumbMain";
import ProfileNavBar from "@/components/shop/profile/ProfileNavBar";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const title = pathname.split("/").pop()?.replace(/-/g, " ") || "Home";

  return (
    <div>
      <div className="">
        <div className="py-4 bg-[#F6F6F6]  h-[140px] flex flex-col justify-center items-center">
          <div className="w-[1180px]">
            <h1 className="text-[20px] font-bold mb-3 capitalize">{title}</h1>
            <BreadcrumbMain />
          </div>
        </div>
        <div className=" w-[1180px] mx-auto py-[60px]">
          <div className="flex gap-[48px]">
            <div className=" w-[260px]">
              <ProfileNavBar />
            </div>
            <div className=" flex-1">
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
