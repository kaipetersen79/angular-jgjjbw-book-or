  /**
   * Class stores product information
   */

export class Product {
  public onSale: boolean;
  private quantity:number;

  constructor(public name:string,
              public price:number,
              public image:string) {
      this.onSale=false;
      this.quantity=0;
  }

  addProduct() {
    this.quantity++;
  }

  removeProduct() {
    if(this.quantity > 0) {
      this.quantity--;
    }
  }

  getQuantity() {
    return this.quantity;
  }



}