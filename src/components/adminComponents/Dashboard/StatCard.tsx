"use client";

import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon?: React.ReactNode;
  chartType?: "bar" | "line" | "progress";
  data?: { name: string; value: number }[];
  goal?: number;
}
export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  chartType,
  data,
  goal,
}: StatCardProps) {
  return (
    <div className=" bg-white p-5 shadow-md rounded-lg w-full ">
      {/* card heading */}
      <div className="flex items-center justify-between">
        {/* title & subtitle */}
        <div className=" flex flex-col ">
          <h3 className="text-[20px] font-bold capitalize">{title}</h3>
          <p className="text-[14px] uppercase font-medium text-[#5C5F6A]">
            {subtitle}
          </p>
        </div>
        {/* value & subtitle */}
        <h1 className="text-[26px] font-bold mt-1">{value} </h1>
      </div>
      {/* Chart / Progress Bar */}
      <div className="mt-3 h-16 flex justify-center flex-col">
        {chartType === "bar" && data ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis hide dataKey="name" />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="value" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : chartType === "line" && data ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis hide dataKey="name" />
              <YAxis hide />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : chartType === "progress" && goal ? (
          <div className="mt-2">
            <p className="text-xs text-gray-500">
              {goal - Number(value)} Left{" "}
            </p>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
              <div
                className={`h-2 bg-blue-500 rounded-full transition-all duration-500 `}
                style={{ width: `${(Number(value) / goal) * 100}%` }}
              ></div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
