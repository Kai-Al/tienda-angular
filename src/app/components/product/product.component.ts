import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {
    id: '',
    tittle: '',
    image: '',
    price: 0,
    description: '',
    category: '',
  };

  @Output() add = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  addToCart() {
    this.add.emit(this.product);
  }
}
