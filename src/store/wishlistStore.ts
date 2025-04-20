import { WishlistItem } from "@/lib/types/wishlist.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";



interface WishlistState {
    items: WishlistItem[];
    setItems: (items: WishlistItem[]) => void;
    addItem: (item: WishlistItem) => void;
    removeItem: (productId: string) => void;
}

export const useWishlistStore = create<WishlistState>()(
    persist(
        (set, get) => ({
            items: [],
            setItems: (items) => set({ items }),
            addItem: (item) => {
                if (!get().items.find((i) => i.productId === item.productId)) {
                    set((state) => ({
                        items: [...state.items, item],
                    }));
                }
            },
            removeItem: (productId) => {
                set((state) => ({
                    items: state.items.filter((item) => item.productId !== productId),
                }));
            },
        }),
        {
            name: "wishlist-storage", // key name in localStorage
        }
    )
);
