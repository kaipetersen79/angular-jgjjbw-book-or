import { Product } from '../model/product';
export interface IProductQuantityTuple {
  product: Product;
  changeInQuantity: number;
}