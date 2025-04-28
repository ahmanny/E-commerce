"use client";

import BreadcrumbMain from "@/components/breadcrumbs/BreadcrumbMain";
import { usePathname } from "next/navigation";

export default function SearchLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const title = pathname.split("/").pop()?.replace(/-/g, " ") || "Home";

  return (
    <div className="bg-white">
      <div className="py-7 bg-[#F6F6F6] flex flex-col justify-center items-center">
        <div className="w-full pl-8">
          <BreadcrumbMain />
        </div>
      </div>
      <div className="  w-full mx-auto py-2">{children}</div>
    </div>
  );
}
