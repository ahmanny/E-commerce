"use client";

import TableComponent from "../TableComponent";
const tableHeader = ["order", "Date", "Total", "Statue"];

const orders = [
  {
    id: 1,
    order: "Raw Black T-Shirt Lineup",
    date: "20 Mar, 2023",
    total: 75.0,
    status: "Processing",
  },
  {
    id: 2,
    order: "Classic Monochrome Tees",
    date: "19 Mar, 2023",
    total: 35.0,
    status: "Processing",
  },
  {
    id: 3,
    order: "Monochromatic Wardrobe",
    date: "7 Feb, 2023",
    total: 27.0,
    status: "Completed",
  },
  {
    id: 4,
    order: "Essential Neutrals",
    date: "29 Jan, 2023",
    total: 22.0,
    status: "Completed",
  },
  {
    id: 5,
    order: "UTRAANET Black",
    date: "27 Jan, 2023",
    total: 43.0,
    status: "Processing",
  },
  {
    id: 6,
    order: "Elegant Ebony Sweatshirts",
    date: "4 Jan, 2023",
    total: 35.0,
    status: "Cancelled",
  },
  {
    id: 7,
    order: "Sleek and Cozy Black",
    date: "28 Dec, 2022",
    total: 57.0,
    status: "Completed",
  },
  {
    id: 8,
    order: "MOCKUP Black",
    date: "20 Dec, 2022",
    total: 30.0,
    status: "Processing",
  },
  {
    id: 9,
    order: "MOCKUP Black",
    date: "20 Dec, 2022",
    total: 30.0,
    status: "Processing",
  },
  {
    id: 10,
    order: "MOCKUP Black",
    date: "20 Dec, 2022",
    total: 30.0,
    status: "Processing",
  },
  {
    id: 11,
    order: "MOCKUP Black",
    date: "20 Dec, 2022",
    total: 30.0,
    status: "Processing",
  },
  {
    id: 12,
    order: "MOCKUP Black",
    date: "20 Dec, 2022",
    total: 30.0,
    status: "Processing",
  },
  {
    id: 13,
    order: "MOCKUP Black",
    date: "20 Dec, 2022",
    total: 30.0,
    status: "Processing",
  },
  {
    id: 14,
    order: "MOCKUP Black",
    date: "20 Dec, 2022",
    total: 30.0,
    status: "Processing",
  },
  {
    id: 15,
    order: "MOCKUP Black",
    date: "20 Dec, 2022",
    total: 30.0,
    status: "Processing",
  },
  {
    id: 16,
    order: "MOCKUP Black",
    date: "20 Dec, 2022",
    total: 30.0,
    status: "Processing",
  },
];

export default function OrderComponent() {
  return (
    <div className="w-[80%] h-[800px]">
      <TableComponent
        tableHeaders={tableHeader}
        componentFor="orders"
        data={orders}
      />
    </div>
  );
}
