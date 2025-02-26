"use client";

import { usePathname } from "next/navigation";

export default function page() {
  const pathname = usePathname();

  const urlSegments = pathname.split("/");
  const ID = urlSegments.filter((item) => (item = "products"));

  return (
    <div>
      <h1>{urlSegments}</h1>
      {urlSegments.map((seg) => (
        <div key={seg}>
          <h1>{seg}</h1>
        </div>
      ))}
      <h1>{ID}</h1>
      <h1>{urlSegments.length} </h1>
    </div>
  );
}
