export default function AdminAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <div className="bg-white w-full">
        <div className=" py-5">{children}</div>
      </div>
    </div>
  );
}
