"use client";

import { useColorModeValue } from "@/components/ui/color-mode";
import { Box } from "@chakra-ui/react";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("black", "white");

  return (
    <Box minH="100vh" bg={bgColor} color={textColor}>
      {children}
    </Box>
  );
}
