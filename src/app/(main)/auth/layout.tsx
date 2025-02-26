"use client";

import PageTitle from "@/components/app/PageTitle";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const title = pathname.split("/").pop()?.replace(/-/g, " ") || "Home";

  return (
    <div className="w-screen">
      <div className=" flex flex-col justify-center items-center bg-[#F6F6F6] w-screen h-[160px]">
        <div className="w-3/5">
          <h1 className="text-[26px] font-bold mb-3 capitalize">{title}</h1>
          <PageTitle title={title} />
        </div>
      </div>
      <div className="container mx-auto min-h-screen">{children}</div>
    </div>
  );
}
