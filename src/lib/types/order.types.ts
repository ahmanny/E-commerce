import { CartItem } from "./cart.types";

export interface orderData {
    shippingDetails: {
        state: string;
        address: string;
        fullName: string;
        email: string;
        city: string;
        zipCode: string;
        country: string;
    };
    items: CartItem[];
    summary: {
        subtotal: number;
        tax: number;
        total: number;
    };
}
