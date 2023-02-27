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


    let price:any = qt*product_price;
    price = price.toFixed(2);
    const cart: ICart = {
      product_id: id,
      price: parseFloat(price),
      quantity: qt
    };

    this.orderCart.push(cart);
    return this.orderCart;
  }
  getCart():ICart[]{
    return this.orderCart;
  }
}
