import { number, string } from "zod";

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


export interface productsinterface {
    __v: number
    _id: string
    title: string;
    colors: string[]
    description: string
    sku: string;
    price: number;
    quantity_available: number
    sizes: string[]
    stock_status: string;
    slug: string
    category: string;
    images: string[];
}
