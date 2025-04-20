import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
interface ModalsState {
    isCartOpen: boolean;
    isReviewModalOpen: boolean;
    setCartOpen: (isOpen: boolean) => void;
    setReviewModalOpen: (isOpen: boolean) => void;
    openCart: () => void;
    openReviewModal: () => void;
    closeCart: () => void;
    closeReviewModal: () => void;
    toggleCart: () => void;
    reset: () => void;
}
const initialState = {
    isCartOpen: false,
    isReviewModalOpen: false,
}

export const useModalsStore = create<ModalsState>()(
    persist(
        (set) => ({
            ...initialState,
            setCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
            setReviewModalOpen: (isOpen) => set({ isReviewModalOpen: isOpen }),
            openReviewModal: () => set({ isReviewModalOpen: true }),
            closeReviewModal: () => set({ isReviewModalOpen: false }),
            openCart: () => set({ isCartOpen: true }),
            closeCart: () => set({ isCartOpen: false }),
            toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
            reset: () => set(initialState)
        }),
        {
            name: "modals",
            storage: createJSONStorage(() => localStorage), // ✅  save to local storage 
        }
    )
);
