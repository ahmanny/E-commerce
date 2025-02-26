export interface ProductFormProps {
    onSubmit?: (data: any) => void;
    initialValues?: any;
}
export interface Product {
    id: number;
    name: string;
    sku: string;
    price: number;
    stock: string;
    categories: string;
    image?: string;
}
