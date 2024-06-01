import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { TestRequest } from '@angular/common/http/testing';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiCartUrl = environment.apiUrl + '/cart';
  private apiCheckOutUrl = environment.apiUrl + '/checkout';

  constructor(private httpClient: HttpClient) {}

  addToCart(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiCartUrl, product);
  }

  getCartItems(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiCartUrl);
  }

  clearCart(): Observable<void> {
    return this.httpClient.delete<void>(this.apiCartUrl);
  }

  checkout(products: Product[]): Observable<void> {
    return this.httpClient.post<void>(this.apiCheckOutUrl, products);
  }
}
