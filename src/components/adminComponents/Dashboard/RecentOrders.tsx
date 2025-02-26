const orders = [
  {
    productName: "Men's Black T-Shirts",
    date: "20 Mar, 2023",
    total: "$75.00",
    status: "Processing",
  },
  {
    productName: "essential neutrals",
    date: "19 Mar, 2023",
    total: "$22.00",
    status: "Processing",
  },
  {
    productName: "Sleek and Cozy Black",
    date: "7 Feb, 2023",
    total: "$57.00",
    status: "Completed",
  },
  {
    productName: "MOCKUP Black",
    date: "29 Jan, 2023",
    total: "$30.00",
    status: "Completed",
  },
  {
    productName: "Monochromatic Wardrobe",
    date: "27 Jan, 2023",
    total: "$27.00",
    status: "Completed",
  },
];

export default function RecentOrders() {
  return (
    <div className="p-6 py-10 pb-16 bg-white rounded-lg ">
      {/* Header Section */}
      <div className="flex gap-4 items-center mb-4">
        <h1 className="text-lg font-semibold">Recent Orders</h1>
        <button className="px-4 py-2 text-sm bg-gray-100 rounded-full">
          View All
        </button>
      </div>

      {/* Table */}
      <div className="border border-gray-100 rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-5  font-semibold py-3 px-4 border-b text-[#5C5F6A]">
          <p className="col-span-2">Item</p>
          <p>Date</p>
          <p>Total</p>
          <p>Status</p>
        </div>

        {/* Table Rows */}
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-5 py-3 px-4  border-b items-center text-[#5C5F6A]"
          >
            <p className="col-span-2 capitalize">{order.productName}</p>
            <p className=" capitalize">{order.date}</p>
            <p className=" capitalize">{order.total}</p>
            <p className={`font-medium  capitalize`}>{order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
