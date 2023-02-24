import { IProduct } from './../models/IProduct';
import { Injectable } from '@angular/core';
import { map,catchError, pluck  } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

getProduct(): Observable<IProduct[]> {
  return this.http.get<IProduct[]>("assets/data.json");
}

}

  