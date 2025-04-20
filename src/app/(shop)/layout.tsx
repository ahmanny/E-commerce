import Header from "@/components/shopComponents/Header";
import Footer from "@/components/shopComponents/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen">
      <Header />
      <div className="mx-auto  mt-1">{children}</div>
      <Footer />
    </div>
  );
}
