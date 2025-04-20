"use client";

import BreadcrumbMain from "@/components/breadcrumbs/BreadcrumbMain";
import { usePathname } from "next/navigation";
export default function AdminAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const title = pathname.split("/").pop()?.replace(/-/g, " ") || "Home";
  return (
    <div className="w-full">
      <div className="bg-white w-[1180px] mx-auto">
        <div className="py-3">
          <BreadcrumbMain />
        </div>
        <div className=" min-h-screen py-3">{children}</div>
      </div>
    </div>
  );
}
