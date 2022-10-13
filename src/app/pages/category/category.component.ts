import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoryID: string | null = null;
  limit: number = 10;
  offset: number = 0;
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    public productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.categoryID = params.get('id');
      if (this.categoryID) {
        this.productsService
          .getProductsByCategory(this.categoryID, this.limit, this.offset)
          .subscribe((data) => {
            this.products = data;
          });
      }
    });
  }
}
