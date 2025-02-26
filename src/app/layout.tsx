import type { Metadata } from "next";
import "../styles/globals.css";
import { Provider } from "@/components/ui/provider";
import QueryProvider from "@/lib/providers/QueryProvider";

export const metadata: Metadata = {
  title: "E-commerce Admin App",
  description: "Built with Next.js and React Query",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Provider>
          <QueryProvider>
            <main className="container min-h-screen">{children}</main>
          </QueryProvider>
        </Provider>
      </body>
    </html>
  );
}
