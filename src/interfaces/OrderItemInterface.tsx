import ProductItemInterface from "./ProductItemInterface";

export default interface OrderItemInterface {
    id: number;
    status: string
    price: string;
    currency: string;
    items: ProductItemInterface[];
} 