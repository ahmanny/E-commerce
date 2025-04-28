import Footer from "@/components/shop/layouts/Footer";
import { Link } from "lucide-react";
import NotificationBar from "@/components/shop/layouts/NotificationBar";
import Header from "@/components/shop/layouts/Header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="container mx-auto ">
        <NotificationBar />
        <Header />
        <div>{children}</div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
