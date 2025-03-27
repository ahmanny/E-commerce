"use client";

import PageTitle from "@/components/app/PageTitle";
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
        <div className="py-4">
          <PageTitle />
        </div>
        <div className="container mx-auto min-h-screen py-2">{children}</div>
      </div>
    </div>
  );
}
