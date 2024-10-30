import { Component } from '@angular/core';

import { ProductsService } from '@/app/products/services/products.service';

import type { Product } from "@/app/products/interfaces/product.interface";

@Component({
  selector: 'products-grid',
  templateUrl: './products-grid.component.html',
  styleUrl: './products-grid.component.css'
})
export class ProductsGridComponent {
  constructor(private productsService: ProductsService) {}

  public get products(): Product[] {
    return this.productsService.products;
  } 
}
