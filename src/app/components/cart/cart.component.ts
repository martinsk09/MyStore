import { Router } from '@angular/router';
import { ICart } from './../../models/ICart';
import { CartService } from '../../services/cart.service';
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
  total!:number;
  address!:string;
  fullname!:string;

  constructor(private cartService:CartService, private router:Router){}

  ngOnInit(): void {
    this.getCart();
    this.setProductCount(10);
    this.calculatePrice();
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
    // console.log(this.cart);
    // this.cartService.getCart()({
    //   next: prod => this.product_loaded = prod,
    //   error: err =>  console.log("see "+ err)
    //  });
  }
  onSubmit(){

    if(this.cart.length<1){

      alert("You have no item to order in your cart.")
    }else{
    this.cartService.confirmOrder(this.fullname,this.total);
    this.router.navigate(['/order-confirmed/']);
    }
  }

  checkQuantity(a:any,i:any){

    let ep = parseFloat(a.target.value);

    if(ep == 0){
      alert('You have successfully removed ('+this.cart[i].product?.name+') from your cart.');
      this.cart.splice(i,1);

    }else{
      this.cart[i].quantity = ep;
    }


    this.calculatePrice();

  }
  calculatePrice(){
    let tots = 0;
    this.total = 0;
    for(let ct = 0; ct<this.cart.length;ct++){
      
      let ip = this.cart[ct].product?.price || 0;
      let iq = this.cart[ct].quantity || 0;
      let tp = ip*iq;
      tots += tp;
      
    }
    this.total = tots;
  }
}
