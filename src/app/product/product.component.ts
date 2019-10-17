import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product';
import { IProductQuantityTuple } from '../model/iproduct-quantity-tuple';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  public quantityOptions:Array<number> = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  

  
  @Input () public product:Product;
  @Output () private quantityChange: EventEmitter<IProductQuantityTuple>;
  
  
  constructor() {
    this.quantityChange = new EventEmitter<IProductQuantityTuple>();
  }


  //product communicates to parent component, which elements have been changed and also what type of change was done (increment or decrement). Depending on the button presses different infos are emitted to the parent component. 

   ngOnInit() {
  }

  increaseQuantity() {
    this.quantityChange.emit({product: this.product, changeInQuantity: 1});
  }

  decreaseQuantity() {
    this.quantityChange.emit({product: this.product, changeInQuantity: -1});
  }  

 

}