import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { Product } from './products.model';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor( private _products:ProductsService){}
    @Post()
    addProduct(@Body() completeBody:Product){
            const id =this._products.insertProd(completeBody)
            return {id:id}
        }
    @Get()
    getAllProd(){
            return this._products.getAll()
    }
    @Get(':id')
    getOne(@Param('id') id:string){
        const prod = this._products.getOne(id)
        return prod
    }
}
