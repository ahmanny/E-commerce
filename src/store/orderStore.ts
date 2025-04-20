import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Order {
    id?: string;
    items: { productId: string; name: string; quantity: number; price: number }[];
    total: number;
    customer: { fullName: string; email: string; address: string };
}

interface OrderState {
    order: Order | null;
    setOrder: (order: Order) => void;
    clearOrder: () => void;
}

export const useOrderStore = create<OrderState>()(
    persist(
        (set) => ({
            order: null,
            setOrder: (order) => set({ order }),
            clearOrder: () => set({ order: null }),
        }),
        { name: "order-storage"} // Saves data in localStorage
    )
);
