"use client";

import { Provider } from "@/components/ui/provider";
import { ReactNode } from "react";

export default function ProviderChakra({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>;
}
