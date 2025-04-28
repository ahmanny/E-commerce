"use client";

import TableComponent from "../tableComponent";
const tableHeader = ["name", "review"];
const reviews = [
  {
    id: 1,
    name: "Essential Neutrals",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem minima officia, ",
    image: "/shirt4.png",
  },
  {
    id: 2,
    name: "Essential Neutrals",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem minima officia, ",
    image: "/shirt4.png",
  },
  {
    id: 3,
    name: "Essential Neutrals",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem minima officia, ",
    image: "/shirt4.png",
  },
  {
    id: 4,
    name: "Essential Neutrals",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem minima officia, ",
    image: "/shirt4.png",
  },
  {
    id: 5,
    name: "Essential Neutrals",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem minima officia, ",
    image: "/shirt4.png",
  },
  {
    id: 6,
    name: "Essential Neutrals",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem minima officia, ",
    image: "/shirt4.png",
  },
  {
    id: 7,
    name: "Essential Neutrals",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem minima officia, ",
    image: "/shirt4.png",
  },
  {
    id: 8,
    name: "Essential Neutrals",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem minima officia, ",
    image: "/shirt4.png",
  },
  {
    id: 9,
    name: "Essential Neutrals",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem minima officia, ",
    image: "/shirt4.png",
  },
  {
    id: 10,
    name: "Essential Neutrals",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem minima officia, ",
    image: "/shirt4.png",
  },
  {
    id: 11,
    name: "Essential Neutrals",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem minima officia, ",
    image: "/shirt4.png",
  },
  {
    id: 12,
    name: "Essential Neutrals",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem minima officia, ",
    image: "/shirt4.png",
  },
  {
    id: 13,
    name: "Essential Neutrals",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem minima officia, ",
    image: "/shirt4.png",
  },
  {
    id: 14,
    name: "Essential Neutrals",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem minima officia, ",
    image: "/shirt4.png",
  },
  {
    id: 15,
    name: "Essential Neutrals",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem minima officia, ",
    image: "/shirt4.png",
  },
  {
    id: 16,
    name: "Essential Neutrals",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem minima officia, ",
    image: "/shirt4.png",
  },
  {
    id: 17,
    name: "Essential Neutrals",
    review: "Lorem ipsum d ",
    image: "/shirt4.png",
  },
  {
    id: 18,
    name: "Essential Neutrals",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem minima officia, ",
    image: "/shirt4.png",
  },
  {
    id: 19,
    name: "Essential Neutrals",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem minima officia, ",
    image: "/shirt4.png",
  },
  {
    id: 20,
    name: "Essential Neutrals",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil autem minima officia, ",
    image: "/shirt4.png",
  },
];
export default function ReviewsComponent() {
  return (
    <div className="w-[80%] h-[800px] ">
      <TableComponent
        tableHeaders={tableHeader}
        componentFor="reviews"
        data={reviews}
      />
    </div>
  );
}
