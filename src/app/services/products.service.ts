import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../models/product.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  getProductsByCategory(categoryId: string, limit?: number, offset?: number) {
    let params = new HttpParams()
    if (limit && offset) {
      params = params
        .set('limit', limit.toString())
        .set('offset', offset.toString());
    }
    return this.http.get<Product[]>(
      `${this.apiUrl}/categories/${categoryId}/products`,
      { params }
    );
  }

  getAllProducts(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset) {
      params = params.set('limit', limit.toString());
      params = params.set('offset', offset.toString());
    }
    return this.http.get<Product[]>(`${this.apiUrl}/products`, { params });
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(`${this.apiUrl}/products`, product);
  }

  updateProduct(id: string, product: Product) {
    return this.http.put<Product>(`${this.apiUrl}/products/${id}`, product);
  }
}
