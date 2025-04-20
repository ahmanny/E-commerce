import { productsinterface } from "./products.types";

export interface CartItemInterface {
    uniqueId: string; // unique identifier for the item in the cart (variantId)
    productId: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
    color: string;
    size: string;
}

export interface CartItem {
    _id?: string;
    productId: productsinterface;
    quantity: number;
    color: string;
    size: string;
}