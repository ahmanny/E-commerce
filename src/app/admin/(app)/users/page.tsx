import CustomersComponents from "@/components/adminComponents/customers/CustomersComponents";

async function fetchData() {
  return new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate 3s delay
}

export default async function CustomersPage() {
  await fetchData();
  return (
    <div>
      <CustomersComponents />
    </div>
  );
}
