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

  product_loaded!: IProduct[];
  iscloaded!: boolean;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
    this.iscloaded = false;
    //this.product_loaded;
  }
  getProduct() {
    this.productService.getProduct().subscribe({
      next: prod => this.product_loaded = prod,
      error: err =>  console.log("see "+ err)
     });
  // (
      this.iscloaded = true;
      // console.log('See companies '+JSON.stringify(this.product_loaded));

    // }, error => {
    //   console.log("see "+error);
    // })
  }


}
