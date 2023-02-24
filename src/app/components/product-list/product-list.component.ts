import { Observable } from 'rxjs';
import { IProduct } from './../../models/IProduct';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent  implements OnInit {

  product_loaded: IProduct[] = [];
  iscloaded!: boolean;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
    this.iscloaded = false;
    //this.product_loaded;
  }
  getProduct() {
    this.productService.getProduct().subscribe(product_loaded => {
      this.product_loaded = product_loaded;
      this.iscloaded = true;
      // console.log('See companies '+this.product_loaded);
    }, error => {
      console.log(error);
    });
  }


}
