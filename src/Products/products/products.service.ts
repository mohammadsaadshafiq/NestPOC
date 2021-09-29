import { Injectable, NotFoundException } from '@nestjs/common';
import {Product} from './products.model'
@Injectable()
export class ProductsService {
  a = new Product
  private products: Product[] = [];
  insertProd(res:Product)
  {
     res.id = Math.random().toString();
     this.a = res
     this.products.push(this.a)
     return res.id;
  }
  getAll(){
      return this.products
  }
  getOne(id:string){
   const prod = this.products.find((x)=>x.id===id)
   if (!prod){
       throw new NotFoundException("not found")
   }
   return prod
  }
}
