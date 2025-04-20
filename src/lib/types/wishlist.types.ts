// wishlist.types.ts
export interface WishlistItem {
    _id: string;
    addedAt: string;
    productId: string;
    title: string;
    image: string;
    price: number
    colors: string[]
    sizes: string[]
}