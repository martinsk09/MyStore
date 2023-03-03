import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/models/ICart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart!: ICart[]; 

  total!:number;
  constructor(private cartService:CartService){
  }
  ngOnInit(): void {
    // this.total = 0
    this.getTotal();
  }
  getTotal(){
    this.cart = this.cartService.orderCart;
    if(this.cart.length>0){
    this.total = this.cart[0].total || 0;
    }else{
      this.total = 0;
    }
  }
}
