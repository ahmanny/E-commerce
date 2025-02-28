


export interface Order {
    id: number;
    order: string;
    date: string;
    total: number;
    image?: string;
    status: string;
}



export interface Review {
    id: number;
    name: string;
    review: string;
    image?: string;
}
