import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface StoreCartItem {
    id?: string
    uniqueId: string;
    productId: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
    color: string;
    size: string;
}

interface CartState {
    isCartOpen: boolean;
    setCartOpen: (isOpen: boolean) => void;
    openCart: () => void;
    closewCart: () => void;
    toggleCart: () => void;
    items: StoreCartItem[];
    setCartItems: (items: StoreCartItem[]) => void;
    addToCart: (item: StoreCartItem) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            isCartOpen: false,
            setCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
            openCart: () => set({ isCartOpen: true }),
            closewCart: () => set({ isCartOpen: false }),
            toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

            // cart page
            items: [],
            setCartItems: (items) => set({ items }),
            // add an item to the cart
            // if the item already exists, update its quantity
            addToCart: (item) =>
                set((state) => {
                    const variantId = `${item.productId}-${item.color}-${item.size}`;
                    const existingItem = state.items.find((i) => i.uniqueId === variantId);
                    if (existingItem) {
                        return {
                            items: state.items.map((i) =>
                                i.uniqueId === variantId
                                    ? { ...i, quantity: i.quantity + item.quantity }
                                    : i
                            ),
                        };
                    }

                    const newItem = { ...item, uniqueId: variantId };

                    return { items: [...state.items, newItem] };
                }),
            // remove an item from the cart
            removeFromCart: (id) =>
                set((state) => ({
                    items: state.items.filter((i) => i.uniqueId !== id),
                })),
            // update the quantity of an item in the cart
            updateQuantity: (id, quantity) =>
                set((state) => ({
                    items: state.items.map((i) =>
                        i.uniqueId === id ? { ...i, quantity } : i
                    ),
                })),
            // clear the cart
            // set the items to an empty array
            clearCart: () => set({ items: [] }),
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => localStorage), // ✅  save to local storage 
        }
    )
);
