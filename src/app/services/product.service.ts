import { Injectable } from '@angular/core';

import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  
  api = 'https://5e79b4b817314d00161333da.mockapi.io'
  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.api}/Product`);
  }}