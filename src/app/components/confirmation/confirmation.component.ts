import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  order!:{name?:string,total?:number};
  constructor(private cartService:CartService){

  }

  ngOnInit(): void {
    this.getConfirmation();
  }
  getConfirmation(){

    this.order = this.cartService.getConfirmation();
    return this.order;
  }

}
