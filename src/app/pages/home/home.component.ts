import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  limit: number = 10;
  offset: number = 1;
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.onLoadMore();
  }

  onLoadMore() {
    this.productsService
      .getAllProducts(this.limit, this.offset)
      .subscribe((data: Product[]) => {
        this.products = this.products.concat(data);
        this.offset += this.limit;
      });
  }
}
