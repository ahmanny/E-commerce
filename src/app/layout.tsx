import type { Metadata } from "next";
import "../styles/globals.css";
import { Provider } from "@/components/ui/provider";
import QueryProvider from "@/lib/providers/QueryProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "E-commerce",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <QueryProvider>
            <Toaster position="top-center" />
            <main>{children}</main>
          </QueryProvider>
        </Provider>
      </body>
    </html>
  );
}
