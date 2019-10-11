import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  myproduct:Product;
  test: String = "bla";
  constructor() {
      this.products = new Array();
   }

  ngOnInit() {
    this.products.push(new Product("Ferrari", 15, "https://drop.ndtv.com/albums/AUTO/Maruti_Suzuki_S_637057817188112458/637057817210146726.jpeg"));
    this.products[0].onSale=true;
    this.products.push(new Product("Porsche", 12, "https://drop.ndtv.com/albums/AUTO/porsche-taycan-turbo/1200x900_1.jpg"));
    this.products.push(new Product("VW", 14, "https://drop.ndtv.com/albums/AUTO/Hyundai_Grand_i_637025058359468841/637025058404396378.jpeg"));
  }

}