import { IProduct } from './../../models/IProduct';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

    @Input()
  product_loaded=IProduct;
  constructor(){
    //  this.product_loaded ;
  }

  ngOnInit(): void {
  }

}
