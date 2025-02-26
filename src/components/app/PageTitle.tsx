import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";

type props = {
  title: string;
};
export default function PageTitle(prop: props) {
  // Get the current pathname
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <>
      <Breadcrumb.Root>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const formattedSegment = segment
            .replace(/-/g, "")
            .replace(/\b\w/g, (char) => char.toUpperCase());
          return (
            <Breadcrumb.List key={href} className=" !flex">
              {index === pathSegments.length - 1 ? (
                <Breadcrumb.Item>
                  <Breadcrumb.CurrentLink>
                    {formattedSegment}
                  </Breadcrumb.CurrentLink>
                </Breadcrumb.Item>
              ) : (
                <span>
                  <Breadcrumb.Item>
                    <BreadcrumbLink as={Link} href={href}>
                      {formattedSegment}
                    </BreadcrumbLink>
                  </Breadcrumb.Item>
                  <Breadcrumb.Separator />
                </span>
              )}
            </Breadcrumb.List>
          );
        })}
      </Breadcrumb.Root>
    </>
  );
}

// <p className=" flex gap-2 items-center capitalize">
//         <Link href={"/"} className=" text-[#5C5F6A]">
//           Ecommerce
//         </Link>{" "}
//         <IoIosArrowForward />
//         <span className="text-black"> {prop.title} </span>
//       </p>
