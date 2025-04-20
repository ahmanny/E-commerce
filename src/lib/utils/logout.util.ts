import { destroyCookie } from 'nookies';
import Router from 'next/router';
import { useUserStore } from '@/store/userStore';

export const logout = () => {
    // 1. Destroy the token 
    destroyCookie(null, "access-token")
    destroyCookie(null, "refresh-token")

    // 2. Reset the user store
    useUserStore.getState().setUser(null);

    // 3. Redirect to login 
    Router.push('/login');
};
