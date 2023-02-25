import { ICart } from './../../models/ICart';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  orderCart: ICart[] = [];
  constructor() {

  }

  addToCart(id:number,qt:number,product_price:number):ICart[]{


    const cart: ICart = {
      product_id: id,
      price: qt*product_price,
      quantity: qt
    };

    this.orderCart.push(cart);
    return this.orderCart;
  }
  getCart():ICart[]{
    return this.orderCart;
  }
}
