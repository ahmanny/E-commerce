"use client";
import { item } from "@/components/shop/profile/ItemCard";
import UserOrders from "@/components/shop/profile/UserOrders";
import ErrorState from "@/components/states/ErrorState";
import LoadingComponent from "@/components/states/LoadingStates/LoadingState";
import { formatDate } from "@/lib/utils/date.utils";
import { useGetUserOrders } from "@/lib/utils/hooks/queries/orders.queries";
import { useEffect, useState } from "react";

export default function Page() {
  const { data, isLoading, isError, error, refetch } = useGetUserOrders(); // Assuming you have this hook
  const [items, setItems] = useState<item[]>([]);

  useEffect(() => {
    if (data) {
      // Transforming data to match the `item` interface
      const transformedItems = data.userOrders.orders.flatMap((order: any) =>
        order.items.map((item: any) => ({
          title: item.productId.title, // Item title from the product data
          image: item.productId.images[0], // Assuming images[0] is the main image
          price: order.summary.total, // order price total
          color: item.color, // Color (optional)
          size: item.size, // Size (optional)
          date: formatDate(order.createdAt), // Order creation date
          orderStatus: order.order_status, // Optional: order status
        }))
      );
      console.log(transformedItems);

      setItems(transformedItems);
    }
  }, [data]);

  if (isLoading) return <LoadingComponent />;
  if (isError) return <ErrorState message={error.message} onRetry={refetch} />;

  return (
    <div>
      {items.length > 0 && <h1 className="heading_2">Orders</h1>}
      {/* Display the orders here */}
      <UserOrders items={items} />
    </div>
  );
}
