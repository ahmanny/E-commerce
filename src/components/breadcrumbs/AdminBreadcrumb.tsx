import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminBreadcrumb() {
  // Get the current pathname
  const pathname = usePathname();
  // get the different path segments availaible
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <>
      <Breadcrumb.Root className="flex gap-1 items-center capitalize text-lg font-semibold">
        {pathSegments.map((segment, index) => {
          // the url of each of the segments
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          return (
            // chakra ui bread crumb used with the segments
            <Breadcrumb.List key={href}>
              {index === pathSegments.length - 1 || index === 0 ? (
                <>
                  {index === 0 ? (
                    <Breadcrumb.Item className="flex gap-1 text-[16px]">
                      <Breadcrumb.CurrentLink className="text-[#5C5F6A]">
                        {segment}
                      </Breadcrumb.CurrentLink>
                    </Breadcrumb.Item>
                  ) : (
                    <Breadcrumb.Item className="flex gap-1 text-[16px]">
                      <Breadcrumb.CurrentLink>{segment}</Breadcrumb.CurrentLink>
                    </Breadcrumb.Item>
                  )}
                  {index === 0 && <Breadcrumb.Separator className="text-lg" />}
                </>
              ) : (
                <>
                  <Breadcrumb.Item className="flex gap-1 text-[16px]">
                    <BreadcrumbLink as={Link} href={href}>
                      {segment}
                    </BreadcrumbLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Separator className="text-lg" />
                </>
              )}
            </Breadcrumb.List>
          );
        })}
      </Breadcrumb.Root>
    </>
  );
}
