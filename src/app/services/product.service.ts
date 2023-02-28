import { Params } from '@angular/router';
import { IProduct } from './../models/IProduct';
import { Injectable } from '@angular/core';
import { map,catchError, pluck  } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private selectedProductSubject = new BehaviorSubject<IProduct>({});
  selectedProductAction$ = this.selectedProductSubject.asObservable();

  constructor(private http: HttpClient ) { arr:[];}

getProduct():Observable<IProduct[]> {
  return this.http.get<IProduct[]>("assets/data.json");
}
  async getProductDetail(product:IProduct){
    
    this.selectedProductSubject.next(product);


console.log('See pp. '+JSON.stringify(product));


}

}