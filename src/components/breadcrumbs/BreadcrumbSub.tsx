import React from "react";
import Link from "next/link";
import { Breadcrumb, BreadcrumbLink } from "@chakra-ui/react";
interface BreadcrumbSubProps {
  breadcrumbItems: string[];
}

export default function BreadcrumbSub({ breadcrumbItems }: BreadcrumbSubProps) {
  return (
    <>
      <Breadcrumb.Root className="flex gap-1 items-center capitalize text-lg  font-semibold">
        {breadcrumbItems.map((breadcrumbItem, index) => (
          <Breadcrumb.List key={index}>
            {index === breadcrumbItems.length - 1 || index === 0 ? (
              <>
                {index === 0 ? (
                  <Breadcrumb.Item className="flex gap-1 text-[16px]">
                    <Breadcrumb.CurrentLink className="text-[#5C5F6A]">
                      {breadcrumbItem}
                    </Breadcrumb.CurrentLink>
                  </Breadcrumb.Item>
                ) : (
                  <Breadcrumb.Item className="flex gap-1 text-[16px]">
                    <Breadcrumb.CurrentLink>
                      {breadcrumbItem}
                    </Breadcrumb.CurrentLink>
                  </Breadcrumb.Item>
                )}
                {index === 0 && <Breadcrumb.Separator className="text-lg" />}
              </>
            ) : (
              <>
                <Breadcrumb.Item className="flex gap-1 text-[16px]">
                  <BreadcrumbLink
                    as={Link}
                    href={`/${breadcrumbItems[index - 1]}/${breadcrumbItem}`}
                  >
                    {breadcrumbItem}
                  </BreadcrumbLink>
                </Breadcrumb.Item>
                <Breadcrumb.Separator className="text-lg" />
              </>
            )}
          </Breadcrumb.List>
        ))}
      </Breadcrumb.Root>
    </>
  );
}
