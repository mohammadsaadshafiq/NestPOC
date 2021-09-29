import { Product } from './products.model';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private _products;
    constructor(_products: ProductsService);
    addProduct(completeBody: Product): {
        id: string;
    };
    getAllProd(): {
        list: () => Product[];
    };
}
