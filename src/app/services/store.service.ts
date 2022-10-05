import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  private myProducts: Product[] = []
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  addProduct(product: Product) {
    this.myProducts.push(product);
    this.myCart.next(this.myProducts);
  }

  getTotalValue() {
    return this.myProducts.reduce((sum, item) => sum + item.price, 0);
  }

  getProducts() {
    return this.myProducts;
  }

}
