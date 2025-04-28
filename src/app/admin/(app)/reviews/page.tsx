import ReviewsComponent from "@/components/admin/reviews/ReviewComponent";

async function fetchData() {
  return new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate 3s delay
}

export default async function ReviewsPage() {
  return (
    <div>
      <ReviewsComponent />
    </div>
  );
}
