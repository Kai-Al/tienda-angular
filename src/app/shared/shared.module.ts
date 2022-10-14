import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [ImgComponent, ProductComponent, ProductListComponent],
  imports: [CommonModule, RouterModule, SwiperModule],
  exports: [ImgComponent, ProductComponent, ProductListComponent],
})
export class SharedModule {}
