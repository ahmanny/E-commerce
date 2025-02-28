import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageTitle() {
  // Get the current pathname
  const pathname = usePathname();
  // get the different path segments availaible
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <>
      <Breadcrumb.Root className="flex gap-2 items-center capitalize text-lg font-semibold">
        {pathSegments.map((segment, index) => {
          // the url of each of the segments
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          // segments formatted
          const formattedSegment = segment
            .replace(/-/g, "")
            .replace(/\b\w/g, (char) => char.toUpperCase());
          return (
            // chakra ui bread crumb used with the segments
            <Breadcrumb.List key={href}>
              {index === pathSegments.length - 1 || index === 0 ? (
                <>
                  <Breadcrumb.Item className="flex gap-2 items-center">
                    <Breadcrumb.CurrentLink>
                      {formattedSegment}
                    </Breadcrumb.CurrentLink>
                  </Breadcrumb.Item>
                  {index === 0 && <Breadcrumb.Separator className="text-xl" />}
                </>
              ) : (
                <>
                  <Breadcrumb.Item className="flex gap-2 items-center">
                    <BreadcrumbLink as={Link} href={href}>
                      {formattedSegment}
                    </BreadcrumbLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Separator className="text-xl" />
                </>
              )}
            </Breadcrumb.List>
          );
        })}
      </Breadcrumb.Root>
    </>
  );
}
