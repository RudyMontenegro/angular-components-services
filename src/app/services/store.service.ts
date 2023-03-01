import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];

  constructor() { }

  addProduct(product: Product){
    this.myShoppingCart.push(product);
   // this.total += product.price;
  }
  getShoppingCart(){
    return this.myShoppingCart
  }
  getTotal(){
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0)// valido para luego restar productos
  }
}
