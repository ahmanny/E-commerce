import type { Metadata } from "next";
import "../../styles/globals.css";
import QueryProvider from "@/lib/providers/QueryProvider";
import Header from "@/components/app/Header";
import Footer from "@/components/app/Footer";
export const metadata: Metadata = {
  title: "E-commerce App",
  description: "Built with Next.js and React Query",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <Header />
          <main className="container mx-auto min-h-screen">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
