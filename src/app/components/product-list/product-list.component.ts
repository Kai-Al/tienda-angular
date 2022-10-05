import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  myProducts: Product[] = [];
  totalValue: number = 0;
  constructor(private storeService: StoreService) {
    this.myProducts = this.storeService.getProducts();
  }

  ngOnInit(): void {}

  products: Product[] = [
    {
      id: '1',
      name: 'Producto 1',
      image: 'https://source.unsplash.com/random',
      price: 100,
      description: 'Descripción del producto 1',
    },
    {
      id: '2',
      name: 'Producto 2',
      image: 'https://source.unsplash.com/random',
      price: 200,
      description: 'Descripción del producto 2',
    },
    {
      id: '3',
      name: 'Producto 3',
      image: 'https://source.unsplash.com/random',
      price: 300,

      description: 'Descripción del producto 3',
    },
    {
      id: '4',
      name: 'Producto 4',
      image: 'https://source.unsplash.com/random',
      price: 400,
      description: 'Descripción del producto 4',
    },
  ];

  addToCart(product: Product) {
    this.storeService.addProduct(product);
    this.totalValue = this.storeService.getTotalValue();
  }
}
