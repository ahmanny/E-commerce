"use client";

import PageTitle from "@/components/app/PageTitle";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const title = pathname.split("/").pop()?.replace(/-/g, " ") || "Home";

  return (
    <div>
      <div className="bg-white">
        <div className="py-4 bg-[#F6F6F6]  h-[140px] flex flex-col justify-center items-center">
          <div className="w-[1180px]">
            <h1 className="text-[20px] font-bold mb-3 capitalize">{title}</h1>
            <PageTitle />
          </div>
        </div>
        <div className="container mx-auto min-h-screen py-2 w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
