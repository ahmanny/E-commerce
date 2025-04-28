"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Classic Monochrome Tees", value: 940 },
  { name: "Monochromatic Wardrobe", value: 790 },
  { name: "Essential Neutrals", value: 740 },
];
const totalSales = "$2,400";

const COLORS = ["#6366F1", "#A5B4FC", "#CBD5E1"];

export default function BestSelling() {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className=" flex flex-col gap-8">
        {/* heading */}
        <div>
          <h1 className="text-[18px] font-bold capitalize">Best Selling</h1>
          <p className="text-[12px] uppercase font-medium text-[#5C5F6A]">
            THIS MONTH
          </p>
        </div>
        {/* divider */}
        <div className="w-full border-b-2 border-solid border-[#E9E9EB]"></div>
        {/* total sales */}
        <div className="flex items-center gap-3">
          <p className="text-2xl font-bold mt-2">{totalSales} </p>
          <p className="text-sm font-medium pt-3 text-gray-500">
            — Total Sales
          </p>
        </div>
      </div>

      {/* List of best selling products */}
      <div className="mt-4 space-y-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex gap-2 items-center border border-solid border-[#E6E7E8] w-fit px-3 py-2 rounded-full text-sm"
          >
            <span>{item.name}</span>
            <span> — </span>
            <span className="font-semibold">{`$${item.value} Sales`}</span>
          </div>
        ))}
      </div>

      {/* Donut Chart */}
      <div className="mt-6">
        <ResponsiveContainer width="40%" height={100}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={40}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
