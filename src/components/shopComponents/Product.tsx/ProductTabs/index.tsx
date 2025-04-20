"use client";

import { Stack, Tabs, Text } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { JSX, useState } from "react";
interface tab {
  label: string;
  value: string;
  icon: JSX.Element;
  content: JSX.Element;
}

interface tabsProps {
  tabsContent: tab[];
}
export default function ProductTabs({ tabsContent }: tabsProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  //   get current tab from url, fallback to first tab if not present
  const currentTab = "details";
  const [value, setValue] = useState(tabsContent[0]?.value || "");

  return (
    <div>
      <Tabs.Root
        value={value}
        onValueChange={(v) => setValue(v.value)}
        orientation="vertical"
        variant={"subtle"}
        size={"lg"}
        maxW="48"
        fitted
        defaultValue={currentTab}
      >
        <Stack direction={"row"} alignItems={"flex-start"}>
          <Tabs.List maxW="245px" maxH="500px">
            {tabsContent.map((tab) => {
              const IsActive = tab.value === value;
              return (
                <Tabs.Trigger key={tab.value} value={tab.value}>
                  <Stack
                    direction="row"
                    px={4}
                    py={3}
                    w="245px"
                    h="45px"
                    borderRadius="lg"
                    bg={IsActive ? "#f6f6f6" : "transparent"}
                    color={IsActive ? "#0E1422" : "#5C5F6A"}
                    _hover={{ bg: "#f0f0f0" }}
                    alignItems="center"
                    gap={2}
                  >
                    {tab.icon}
                    <Text fontSize={"lg"}>{tab.label}</Text>
                  </Stack>
                </Tabs.Trigger>
              );
            })}
          </Tabs.List>
          {tabsContent.map((tab) => (
            <Tabs.Content key={tab.value} value={tab.value}>
              <Stack direction="row" gap={4}>
                {tab.content}
              </Stack>
            </Tabs.Content>
          ))}
        </Stack>
      </Tabs.Root>
    </div>
  );
}
