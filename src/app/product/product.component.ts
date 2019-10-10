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
    this.products.push(new Product("Ferrari", 15, "../model/bla.jpg"));
    this.products[0].onSale=true;
    this.products.push(new Product("Porsche", 12, "../model/bla.jpg"));
    this.products.push(new Product("VW", 14, "../model/bla.jpg"));
  }

}