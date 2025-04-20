import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserAddress = {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}

export type User = {
    _d?: string
    name: string;
    email: string;
    phone: string;
    profilePicture?: string;
    shippingAddress?: UserAddress;
    role: string;
};

type UserStore = {
    user: User | null;
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
    setUser: (data: User | null) => void;
    updateUser: (data: Partial<User>) => void;
    logout: () => void;
};
export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            user: null,
            isLoggedIn: false,
            setIsLoggedIn: (value) => set({ isLoggedIn: value }),
            setUser: (data) => set({ user: data }),
            updateUser: (data) =>
                set((state) => ({
                    user: state.user ? { ...state.user, ...data } : null,
                })),
            logout: () =>
                set(() => ({
                    user: null,
                    isLoggedIn: false,
                })),
        }),

        {
            name: "user",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)