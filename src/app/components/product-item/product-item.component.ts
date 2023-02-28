import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { CartService } from './../cart/cart.service';
import { IProduct } from './../../models/IProduct';
import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

    @Input() prod!: IProduct;

    @Output() quant!: number[];
added: number=0;
quantity:number=1;
  constructor(private cartService: CartService,private productService:ProductService,private router:Router){
    // this.prod=[{
    //   "id": 1,
    //   "name": "Book",
    //   "price": 9.99,
    //   "url": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    //   "description": "You can read it!"} ]
  }

  ngOnInit(): void {
    // console.log('See prods '+JSON.stringify(this.prod)); 
    this.setProductCount(10);   
    this.quantity ;


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
  async addToCart(id:any,qt:any,product_price:any){
    // console.log('see id '+id+' see qt '+qt+' see amt '+this.prod.price);
   try{
    let cc = this.cartService.addToCart(id, qt, product_price);
    alert('Your item was added to the cart successfully!');
    console.log('Cart is now: '+JSON.stringify(cc));
   } catch(err){
    console.log(err);
   }
  }
  updatedQuantity(qt:number){
    console.log(' see qt '+qt);
  }
  showProduct(product:any){
    this.productService.getProductDetail(product);
    this.router.navigate(['/product-detail/'+this.prod.id]);
  }
}
