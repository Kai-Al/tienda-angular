import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  limit: number = 10;
  offset: number = 1;
  products: Product[] = [];
  productId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.onLoadMore();
    this.route.queryParams.subscribe((params) => {
      this.productId = params['product'];
      console.log(this.productId);
    });
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
