import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product = {
    id: '',
    title: '',
    images: [],
    price: 0,
    description: '',
    category: {
      id: '',
      name: '',
    },
  };

  @Output() add = new EventEmitter<Product>();
  @Output() productDetail = new EventEmitter<string>();

  constructor() {}

  addToCart() {
    this.add.emit(this.product);
  }

  details() {
    this.productDetail.emit(this.product.id);
  }

}
