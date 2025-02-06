import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { ProductCardComponent } from './components/product-card/product-card.component';


@NgModule({
  declarations: [
    ProductsGridComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsGridComponent
  ]
})
export class ProductsModule { }
