"use client";

import { useCartStore } from "@/store/cartStore";
import {
  Button,
  ButtonGroup,
  CloseButton,
  Drawer,
  Portal,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import CartDrawerFooter from "./CartDrawerFooter";
import CartDrawerItem from "./CartDrawerItem";

export default function CartDrawer() {
  const { setCartOpen, isCartOpen, items } = useCartStore();
  // Calculate Prices
  const cartPriceTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <>
      <Drawer.Root
        // closeOnInteractOutside={false}
        open={isCartOpen}
        onOpenChange={(details) => setCartOpen(details.open)}
        size={"lg"}
      >
        <Drawer.Trigger asChild>
          <button className="relative">
            <BsCart4 className=" text-[18px] sm:text-[22px]" />
            <p className="absolute top-[-13px] right-[-13px] bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-sm">
              {items.length}
            </p>
          </button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header>
                <div className="flex items-center justify-between !mb-3">
                  <Drawer.Title className="!text-2xl !font-semibold">
                    Shopping Cart
                  </Drawer.Title>
                  <Drawer.CloseTrigger asChild>
                    <CloseButton className="hover:!bg-slate-200" />
                  </Drawer.CloseTrigger>
                </div>
              </Drawer.Header>
              <Drawer.Body>
                <div className="flex flex-col justify-center gap-7">
                  {items.length > 0 ? (
                    items.map((item) => (
                      <div key={item.uniqueId}>
                        <CartDrawerItem item={item} />
                        <hr className="mt-7" />
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">Your cart is empty.</p>
                  )}
                </div>
              </Drawer.Body>
              <Drawer.Footer>
                <CartDrawerFooter cartPriceTotal={cartPriceTotal} />
              </Drawer.Footer>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
}
