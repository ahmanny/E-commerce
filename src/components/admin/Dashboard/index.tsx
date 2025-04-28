import BestSelling from "./BestSelling";
import RecentOrders from "./RecentOrders";
import StatCard from "./StatCard";
const customersData = [
  { name: "D1", value: 10 },
  { name: "D2", value: 70 },
  { name: "D3", value: 74 },
  { name: "D4", value: 719 },
  { name: "D5", value: 702 },
  { name: "D6", value: 30 },
  { name: "D7", value: 70 },
  { name: "D8", value: 10 },
  { name: "D9", value: 120 },
  { name: "D10", value: 105 },
  { name: "D11", value: 35 },
  { name: "D12", value: 1 },
  { name: "D13", value: 320 },
  { name: "D14", value: 38 },
  { name: "D15", value: 60 },
  { name: "D16", value: 70 },
  { name: "D17", value: 320 },
  { name: "D18", value: 30 },
  { name: "D19", value: 31 },
  { name: "D20", value: 90 },
  { name: "D21", value: 100 },
  { name: "D22", value: 300 },
  { name: "D23", value: 12 },
  { name: "D24", value: 19 },
  { name: "D25", value: 30 },
  { name: "D26", value: 9 },
  { name: "D27", value: 50 },
  { name: "D28", value: 60 },
  { name: "D29", value: 70 },
  { name: "D30", value: 10 },
];
export default function DashBoardComponent() {
  const goals = 1000;
  return (
    <>
      <div className="grid grid-cols-3 gap-20 w-[87%]">
        <div className="">
          <StatCard
            title="Total sales"
            value="$4,235"
            subtitle="this month"
            chartType="line"
            data={customersData}
          />
        </div>
        <div className="">
          <StatCard
            title="customers"
            value="2,571"
            subtitle="this month"
            chartType="bar"
            data={customersData}
          />
        </div>
        <div className="">
          <StatCard
            title="orders"
            value="734"
            subtitle={`monthly goals : ${goals}`}
            chartType="progress"
            goal={goals}
          />
        </div>
        <div>
          <BestSelling />
        </div>
        <div className="col-span-2">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}
