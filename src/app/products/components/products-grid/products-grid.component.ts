import { Component } from '@angular/core';

import { ProductsService } from '@/app/products/services/products.service';
import {CartService} from '@/app/cart/services/cart.service';

import type { Product } from "@/app/products/interfaces/product.interface";
import type {CartItem} from '@/app/cart/interfaces';

@Component({
  selector: 'products-grid',
  templateUrl: './products-grid.component.html',
  styleUrl: './products-grid.component.css'
})
export class ProductsGridComponent {
  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
  ) {}

  public get products(): Product[] {
    return this.productsService.products;
  }

  public onAddToCart(product: Product) {
    this.cartService.addProductToCart({
      id: product.id,
      name: product.name,
      unitPrice: product.price,
      quantity: 1,
      productImage: product.image
    });
  }
}
