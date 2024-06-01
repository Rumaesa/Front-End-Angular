import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient} from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.apiUrl + '/product';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl);
  }
}
