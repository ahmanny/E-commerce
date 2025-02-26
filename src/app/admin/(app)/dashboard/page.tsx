import DashBoardComponent from "@/components/adminComponents/Dashboard/DashBoard.component";
async function fetchData() {
  return new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate 3s delay
}
export default async function page() {
  await fetchData();
  return (
    <>
      <DashBoardComponent />
    </>
  );
}
