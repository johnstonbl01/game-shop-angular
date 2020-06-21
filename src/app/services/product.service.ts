import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Game } from '../models/game';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  products: Observable<Object>;

  fetchProducts(): void {
    this.products = this.http.get<Game[]>(
      'https://qwbegxw1t8.execute-api.us-east-1.amazonaws.com/dev/games'
    );
  }
}
