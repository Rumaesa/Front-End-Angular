import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.apiUrl + '/products';

  constructor(
    private httpClient: HttpClient,
    private httpHandler: HttpHandler
  ) {}

  getproducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }
}
