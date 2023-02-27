import { ProductService } from './../../services/product.service';
import { IProduct } from './../../models/IProduct';
import { CartService } from './../cart/cart.service';
import {ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  quant!: number[];
  prod!:IProduct;
  prodId!: string | number | null;
  quantity:number=1;
  constructor(private cartService:CartService, private productService:ProductService,private route:ActivatedRoute){

    const ids = route.params;


  }
  ngOnInit(): void {
    // this.prod;
    this.prodId = this.route.snapshot.paramMap.get('id');

    this.quantity;
    this.setProductCount(10);
    this.getProductItem();
    // console.log('id '+prodId);
  }

async getProductItem(){
  this.productService.getProductDetail(this.prodId);
}

setProductCount(num:number):void{
  let ds = [];
  for (let ct = 0; ct <= num; ct++) {
    //  this.quant.push(ct);
    ds.push(ct);
  }
  this.quant = ds;
  //  console.log('see q '+ds);
}
  async addToCart(id:number,qt:number,product_price:number){
    // console.log('see id '+id+' see qt '+qt+' see amt '+this.prod.price);
   try{
    let cc = this.cartService.addToCart(id, qt, product_price);
    alert('Your item was added to the cart successfully!');
    console.log('Cart is now: '+JSON.stringify(cc));
   } catch(err){
    console.log(err);
   }
  }
  
}
