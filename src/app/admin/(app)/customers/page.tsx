async function fetchData() {
  return new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate 3s delay
}

export default async function CustomersPage() {
  await fetchData();
  return <div>CustomersPage</div>;
}
