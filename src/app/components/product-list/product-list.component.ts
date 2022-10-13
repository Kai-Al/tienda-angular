import { Component, Input, Output,  EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';
import Swal from 'sweetalert2';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  myProducts: Product[] = [];
  totalValue: number = 0;
  @Input() products: Product[] = [];
  @Output() loadMore = new EventEmitter();

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


  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myProducts = this.storeService.getProducts();
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
    this.statusDetail = 'loading';
    this.productsService.getProduct(id).subscribe(
      (data: Product) => {
        this.productChosen = data;
        this.statusDetail = 'success';
        this.toggleProductDetail();
      },
      (response) => {
        this.statusDetail = 'error';
        Swal.fire({
          icon: 'error',
          title: response.error.message,
          text: 'Try again later',
          confirmButtonText: 'OK',
        });
      }
    );
  }

  createProduct() {
    this.productsService
      .createProduct(this.productChosen)
      .subscribe((data: Product) => {
        this.products.push(data);
      });
  }

  readAndUpdateProduct(id: string) {
    this.productsService
      .getProduct(id)
      .pipe(
        switchMap((product: Product) => {
          product.title = 'Updated';
          return this.productsService.updateProduct(id, product);
        })
      )
      .subscribe((data: Product) => {
        console.log(data);
      });
  }

 
 onLoadMore() {
    this.loadMore.emit();
  }
  
}
