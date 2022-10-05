import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  private myProducts: Product[] = []

  addProduct(product: Product) {
    this.myProducts.push(product);
  }

  getTotalValue() {
    return this.myProducts.reduce((sum, item) => sum + item.price, 0);
  }

  getProducts() {
    return this.myProducts;
  }

}
