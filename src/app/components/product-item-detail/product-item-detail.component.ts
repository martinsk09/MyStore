import { ProductService } from './../../services/product.service';
import { IProduct } from './../../models/IProduct';
import { CartService } from '../../services/cart.service';
import {ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  quant!: number[];
  prod!:IProduct;
  prodId!: any | number  |IProduct;
  quantity:number=1;
  constructor(private cartService:CartService, private productService:ProductService,private route:ActivatedRoute){

    const ids = route.params;


  }

  selectedProduct$ = this.productService.selectedProductAction$;
  ngOnInit(): void {
    // this.prod;
    this.prodId = this.route.snapshot.paramMap.get('id');

    // if (this.selectedProduct$){
    // console.log('seed '+JSON.stringify(this.selectedProduct$));
    // }
    // console.log('seep '+this.prod);
    this.quantity;
    this.setProductCount(10);
    // this.getProductItem();
    // console.log('id '+prodId);
  }

async getProductItem(){
  this.productService.getProductDetail(this.prodId);
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
  addToCart(id:any,qt:any,product_price:any,product:IProduct){
    // console.log('see id '+id+' see qt '+qt+' see amt '+this.prod.price);
   try{
    let cc = this.cartService.addToCart(id, qt, product_price,product);
    alert('Your item was added to the cart successfully!');
    // console.log('Cart is now: '+JSON.stringify(cc));
   } catch(err){
    console.log(err);
   }
  }
  
}
