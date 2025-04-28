"use client";

import AdminNavBar from "@/components/admin/layouts/AdminNavBar";
import LogoutBtn from "@/components/admin/ui/LogoutBtn";
import AdminBreadcrumb from "@/components/breadcrumbs/AdminBreadcrumb";
import { usePathname } from "next/navigation";

export default function AdminAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const title = pathname.split("/").pop()?.replace(/-/g, " ") || "Home";
  return (
    <div className="flex bg-[#F6F6F6] justify-center w-screen gap-[48px]">
      <div className=" w-[260px] bg-white">
        <AdminNavBar />
      </div>
      <div className="container   min-h-screen flex-1 pt-5">
        <div className=" h-[75px]  flex justify-between items-center pr-8">
          <AdminBreadcrumb />
          <LogoutBtn />
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </div>
  );
}
