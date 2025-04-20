import { number, string } from "zod";
import { reviewsInterface } from "./review.types";

export interface ProductFormProps {
    onSubmit?: (data: any) => void;
    initialValues?: any;
}
export interface Product {
    id: number;
    name: string;
    sku: string;
    price: number;
    stock: string;
    categories: string;
    image?: string;
}
interface category {
    _id: string
    name: string
}

export interface productsinterface {
    __v: number
    _id: string
    title: string
    colors: string[]
    description: string
    sku: string
    price: number
    quantity_available: number
    sizes: string[]
    stock_status: string
    slug: string
    categories: any[]
    highlights: string[]
    images: any[];
    gender: string
    material: string
    reviews: any[]
    totalSold: number,
    averageRating: number,
    reviewCount: number,
}
