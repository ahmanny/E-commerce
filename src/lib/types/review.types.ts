export interface user {
    name: string;
    email: string;
    image: string;
}

export interface review {
    product: string;
    rating: number;
    comment: string;
    isVerifiedBuyer: boolean;
}

export interface reviewsInterface {
    user: user;
    product: string;
    rating: number;
    comment: string;
    isVerifiedBuyer: boolean;
    createdAt: string;
}