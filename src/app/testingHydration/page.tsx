import ProductTabs from "@/components/shopComponents/Product.tsx/ProductTabs";
import ProductDetails from "@/components/shopComponents/Product.tsx/ProductTabs/ProductDetails";
import ProductReviews from "@/components/shopComponents/Product.tsx/ProductTabs/ProductReviews";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineStarOutline } from "react-icons/md";
import { Avatar, HStack, RatingGroup, Stack, Text } from "@chakra-ui/react";
import { Rating } from "@/components/shopComponents/Product.tsx/ProductTabs/ProductReviews/RatingStars";

export default function page() {
  const reviews = [
    {
      user: { name: "Solomon", email: "test@example.com", image: "hello" },
      reviews: [
        { product: "123", rating: 5, comment: "Great!", isVerifiedBuyer: true },
        { product: "124", rating: 4, comment: "Good", isVerifiedBuyer: false },
      ],
    },
    {
      user: { name: "James", email: "james@example.com", image: "hi" },
      reviews: [
        { product: "123", rating: 3, comment: "Okay", isVerifiedBuyer: true },
      ],
    },
  ];
  return <div className="mt-10">page</div>;
}
