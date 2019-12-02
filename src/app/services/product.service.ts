import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable()
export class ProductService {

  private products: Product[];

  constructor() {

    this.products = new Array<Product>();

    this.products.push(new Product(0,"Ferrari", 15, "https://drop.ndtv.com/albums/AUTO/Maruti_Suzuki_S_637057817188112458/637057817210146726.jpeg"));
    this.products[0].onSale=true;
    this.products.push(new Product(1,"Porsche", 12, "https://drop.ndtv.com/albums/AUTO/porsche-taycan-turbo/1200x900_1.jpg"));
    this.products.push(new Product(2,"VW", 14, "https://drop.ndtv.com/albums/AUTO/Hyundai_Grand_i_637025058359468841/637025058404396378.jpeg"));
   }

   addProduct(product:Product) {
     this.products.push(product);
   }

}