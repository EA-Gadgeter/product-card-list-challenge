import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';



@NgModule({
  declarations: [
    ProductsGridComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsGridComponent
  ]
})
export class ProductsModule { }
