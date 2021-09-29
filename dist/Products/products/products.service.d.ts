import { Product } from './products.model';
export declare class ProductsService {
    a: Product;
    products: Product[];
    insertProd(res: Product): string;
    getAll(): Array<Product>;
}
