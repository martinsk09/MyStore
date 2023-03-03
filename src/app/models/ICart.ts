import { IProduct } from './IProduct';
export type ICart = {
    id?: number;
    product?:IProduct;
    product_id?: number;
    price?: number;
    total?: number;
    quantity?: number;
    fullname?: string;
    card?: string;
    address?: string;
}