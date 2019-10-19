import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { IProductQuantityTuple} from '../model/iproduct-quantity-tuple'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {

  public products: Product[];
  private changedProduct: Product;

  constructor() {
      this.products = new Array<Product>();
   }

  ngOnInit() {

        this.products.push(new Product(0,"Ferrari", 15, "https://drop.ndtv.com/albums/AUTO/Maruti_Suzuki_S_637057817188112458/637057817210146726.jpeg"));
        this.products[0].onSale=true;
        this.products.push(new Product(1,"Porsche", 12, "https://drop.ndtv.com/albums/AUTO/porsche-taycan-turbo/1200x900_1.jpg"));
        this.products.push(new Product(2,"VW", 14, "https://drop.ndtv.com/albums/AUTO/Hyundai_Grand_i_637025058359468841/637025058404396378.jpeg"));
  }

  public reactToQuantityChange(changeinfo: IProductQuantityTuple) {
      
      /* Lamda solution - return the product where the id of the product in this.products (prod) is equivalent to the product in change info */
      this.changedProduct = this.products.find(prod => {
        return changeinfo.product.id === prod.id;
      })

      this.changedProduct.quantity += changeinfo.changeInQuantity;
  }

}