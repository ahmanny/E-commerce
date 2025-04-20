import { Button } from "@chakra-ui/react";
import Link from "next/link";

interface CartDrawerFooterProps {
  cartPriceTotal: number;
}

export default function CartDrawerFooter({
  cartPriceTotal,
}: CartDrawerFooterProps) {
  return (
    <div className="!flex !flex-col w-full">
      <hr className="my-6" />
      <div className="flex justify-between text-lg font-semibold">
        <span>Total:</span>
        <span>${cartPriceTotal.toFixed(2)}</span>
      </div>
      <div className="my-10 flex flex-col gap-10">
        <Link href={"/cart"}>
          <Button className="btn text-xl">View cart</Button>
        </Link>
        <Link href={"/check-out"} className="text-center underline text-xl">
          Checkout
        </Link>
      </div>
    </div>
  );
}
