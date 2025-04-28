"use client";

import React, { useState } from "react";
import { Button, Drawer, DrawerPositioner, Portal } from "@chakra-ui/react";
import Filter from ".";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { HiFilter } from "react-icons/hi";

export default function FilterMobileDrawer() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <div>
      <DrawerRoot
        placement={"start"}
        open={isFilterOpen}
        onOpenChange={(details) => setIsFilterOpen(details.open)}
      >
        <DrawerTrigger asChild>
          <button className="p-1 rounded-sm">
            <HiFilter className="text-[28px]" />
          </button>
        </DrawerTrigger>
        <Portal>
          <DrawerBackdrop />
          <DrawerPositioner
            position={"fixed"}
            top={"0"}
            bottom={"0"}
            left={"0"}
            right={"0"}
          >
            <DrawerContent
              width={"200px"}
              roundedBottomRight={"lg"}
              roundedTopRight={"lg"}
            >
              <DrawerBody overflowY={"auto"}>
                <Filter />
              </DrawerBody>
            </DrawerContent>
          </DrawerPositioner>
        </Portal>
      </DrawerRoot>
      {/* <Drawer.Root placement={"start"}>
        <Drawer.Trigger asChild>
          <Button variant="outline" size="xs">
            Open Drawer
          </Button>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content roundedBottom={"l3"}>
              <Filter />
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root> */}
    </div>
  );
}
