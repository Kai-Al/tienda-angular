import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  myProducts: Product[] = [];
  totalValue: number = 0;
  products: Product[] = [];
  productChosen: Product = {
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


  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myProducts = this.storeService.getProducts();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }

  addToCart(product: Product) {
    this.storeService.addProduct(product);
    this.totalValue = this.storeService.getTotalValue();
  }

  showProductDetail = false;

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  showDetails(id: string) {
    this.productsService.getProduct(id).subscribe((data: Product) => {
      this.productChosen = data;
      this.toggleProductDetail();
    });
    
  }

}
