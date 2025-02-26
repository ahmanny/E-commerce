"use client";

import TableComponent from "../TableComponent";
const tableHeader = ["name", "SKU", "Price", "Stock", "categories"];
const products = [
  {
    id: 1,
    name: "Raw Black T-Shirt",
    sku: "47514501",
    price: 75,
    stock: "In Stock",
    categories: "T-shirt, Men",
    image: "/shirt1.png",
  },
  {
    id: 2,
    name: "Classic Monochrome Tees",
    sku: "47514501",
    price: 35,
    stock: "In Stock",
    categories: "T-shirt, Men",
    image: "/shirt2.png",
  },
  {
    id: 3,
    name: "Monochromatic Wardrobe",
    sku: "47514501",
    price: 27,
    stock: "In Stock",
    categories: "T-shirt",
    image: "/shirt3.png",
  },
  {
    id: 4,
    name: "Essential Neutrals",
    sku: "47514501",
    price: 22,
    stock: "In Stock",
    categories: "T-shirt, Raw",
    image: "/shirt4.png",
  },
];
export default function ProductsComponent() {
  return (
    <div className="w-[80%] h-[800px] ">
      <TableComponent
        tableHeaders={tableHeader}
        componentFor="products"
        data={products}
        addBtnText="Add product"
      />
    </div>
  );
}
