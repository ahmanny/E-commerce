import { destroyCookie } from 'nookies';
import { useUserStore } from '@/store/userStore';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { useOrderStore } from '@/store/orderStore';
import { useModalsStore } from '@/store/modalStore';

export const logout = () => {
    // 1. Remove the token from cookies
    destroyCookie(null, "access-token", { path: '/' });
    destroyCookie(null, "refresh-token", { path: '/' });
    destroyCookie(null, "user-role", { path: '/' });

    // 2. Reset the Zustand stores using `getState` method
    const userStore = useUserStore.getState();
    const cartStore = useCartStore.getState();
    const wishlistStore = useWishlistStore.getState();
    const orderStore = useOrderStore.getState();
    const modalsStore = useModalsStore.getState();

    // Reset all the stores
    userStore.setUser(null);
    userStore.logout();
    cartStore.clearCart();
    wishlistStore.clearWishlist();
    orderStore.clearOrder();
    modalsStore.reset();

};
