import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  public product: Product;
  constructor() { 
    this.product = new Product(0,"Ferrari", 15, "https://drop.ndtv.com/albums/AUTO/Maruti_Suzuki_S_637057817188112458/637057817210146726.jpeg")
  }

  createStock() {
    console.log('Create product ', this.product)
  }

  createStockFormGroup(productFormGroup) {
    if(productFormGroup.valid) {
      this.product = productFormGroup.value.product;
      console.log('Created product from form group', this.product);
    }
    else {
      console.error("The form was not valid");
    }
  }

  ngOnInit() {
  }

}