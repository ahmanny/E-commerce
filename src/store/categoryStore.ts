import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CategoryState {
    categories: string[];
    setCategories: (categories: string[]) => void;
}

export const useCategoryStore = create<CategoryState>()(
    persist(
        (set) => ({
            categories: [],
            setCategories: (categories) => set({ categories }),
        }),
        {
            name: "app-categories", // key name in localStorage
            storage: createJSONStorage(() => localStorage), // ✅  save to local storage 
        }
    )
);
