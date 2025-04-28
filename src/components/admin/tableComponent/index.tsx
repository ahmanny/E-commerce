"use client";

import { Table } from "@chakra-ui/react";
import { BiSortAlt2 } from "react-icons/bi";
import SearchBar from "../../searchBars/SearchBar";
import { useEffect, useState } from "react";
import { Order, Review } from "@/lib/types/admin.types";
import Pagination from "../../ui/pagination";
import { productsinterface } from "@/lib/types/products.types";
import { useRouter } from "next/navigation";
import { Customer } from "@/lib/types/cutomers.types";
import ProductsRow from "./ProductsRow";
import OrdersRow from "./OrdersRow";
import CustomersRow from "./CustomersRow";
import ReviewsRow from "./ReviewsRow";

interface TableProps {
  tableHeaders: string[];
  componentFor?: "products" | "orders" | "customers" | "reviews";
  data?: productsinterface[] | Order[] | Customer[] | Review[];
  addBtnText?: string;
}

const isProduct = (item: any): item is productsinterface =>
  "sku" in item && "stock_status" in item;
const isOrder = (item: any): item is Order => "order" in item && "date" in item;
const isReview = (item: any): item is Review =>
  "review" in item && "name" in item;
const isCustomer = (item: any): item is Customer =>
  "email" in item && "shippingAddress" in item;

export default function DataTables({
  tableHeaders,
  componentFor,
  data = [],
  addBtnText,
}: TableProps) {
  const [filteredItems, setFilteredItems] = useState(data);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    // Ensure filteredItems updates when data changes
    setFilteredItems(data);
    // reset pagination when data updates
    setCurrentPage(0);
  }, [data]);

  const paginatedData = filteredItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  const router = useRouter();
  const gotoAddProduct = () => {
    router.push("/admin/products/add-product");
  };

  return (
    <div className="bg-white h-full flex justify-between  flex-col p-5 ">
      <div>
        <div className="flex p-5 px-16 justify-between items-center">
          <h1 className=" text-[#0E1422] text-[18px] capitalize">
            {componentFor}
          </h1>
          <div className=" flex gap-4">
            {/* add to table button */}
            {addBtnText && (
              <div className="w-32">
                <button
                  onClick={gotoAddProduct}
                  type="submit"
                  className="btn text-base !h-[35px]"
                >
                  {addBtnText}
                </button>
              </div>
            )}
            {/* search within product table */}
            {componentFor === "products" && (
              <SearchBar<productsinterface>
                items={data as productsinterface[]} // Use `data` instead of `filteredItems`
                searchKey="title"
                onSearch={setFilteredItems}
              />
            )}
            {/* search within orders table */}

            {componentFor === "orders" && (
              <SearchBar<Order>
                items={data as Order[]}
                searchKey="order"
                onSearch={setFilteredItems}
              />
            )}
            {/* search within customers table */}

            {componentFor === "customers" && (
              <SearchBar<Customer>
                items={data as Customer[]}
                searchKey="name"
                onSearch={setFilteredItems}
              />
            )}
            {/* search within reviews table */}

            {componentFor === "reviews" && (
              <SearchBar<Review>
                items={data as Review[]}
                searchKey="name"
                onSearch={setFilteredItems}
              />
            )}
          </div>
        </div>
        <Table.Root size="lg" className="text-[#5C5F6A] h-[95%]">
          <Table.Header>
            <Table.Row className="border-y-[0.1px] border-solid py-10 border-neutral-300">
              <Table.ColumnHeader></Table.ColumnHeader>
              <Table.ColumnHeader className="text-[#5C5F6A] text-[24px]">
                <BiSortAlt2 />
              </Table.ColumnHeader>
              {tableHeaders.map((header, index) => (
                <Table.ColumnHeader
                  key={index}
                  className="text-[#5C5F6A] text-[16px] capitalize"
                >
                  {header}
                </Table.ColumnHeader>
              ))}
              <Table.ColumnHeader>Action</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>

          <Table.Body className=" capitalize">
            {paginatedData.length === 0 ? (
              <Table.Row>
                <Table.Cell
                  colSpan={tableHeaders.length + 2}
                  className="text-center"
                >
                  No data available
                </Table.Cell>
              </Table.Row>
            ) : (
              paginatedData.map((item, index) => (
                <Table.Row key={index}>
                  {componentFor === "products" && isProduct(item) && (
                    <ProductsRow item={item} /> // Using ProductsRow component for products
                  )}
                  {componentFor === "orders" && isOrder(item) && (
                    <OrdersRow item={item} />
                  )}
                  {componentFor === "customers" && isCustomer(item) && (
                    <CustomersRow item={item} />
                  )}
                  {componentFor === "reviews" && isReview(item) && (
                    <ReviewsRow item={item} />
                  )}
                </Table.Row>
              ))
            )}
          </Table.Body>
        </Table.Root>
      </div>

      {/* pagination for table  */}
      <Pagination
        pageCount={Math.ceil(filteredItems.length / itemsPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
