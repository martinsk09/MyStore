import { ICart } from './../../models/ICart';
import { CartService } from './cart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  @Input() ngValue: any;
  quant!: number[];
  cart!: ICart[]; 
  cartItems!:[];
  card!:number;
  address!:string;
  fullname!:string;
  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.getCart();
    this.setProductCount(10);
  }

setProductCount(num:number):void{
  let ds = [];
  for (let ct = 1; ct <= num; ct++) {
    //  this.quant.push(ct);
    ds.push(ct);
  }
  this.quant = ds;
  //  console.log('see q '+ds);
}
  getCart(){
    this.cart = this.cartService.getCart();
    console.log(this.cart);
    // this.cartService.getCart()({
    //   next: prod => this.product_loaded = prod,
    //   error: err =>  console.log("see "+ err)
    //  });
  }
  onSubmit(){

  }
  checkQuantity(a:any,i:any){


    let ep = parseFloat(a.target.value);
    console.log('cart: '+ep+' quant '+this.cart[i].quantity);
  }
  calculatePrice(){

  }
}
