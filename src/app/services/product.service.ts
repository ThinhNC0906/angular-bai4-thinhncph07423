import { Injectable } from '@angular/core';

import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  
  api = "https://5e7afc840e0463001633284b.mockapi.io"
  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.api}/Product`);
  }
  getProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/Product/${id}`)
  }
  removeProduct(id): Observable<Product>{
    return this.http.get<Product>(`${this.api}/Product/${id}`)
  }}