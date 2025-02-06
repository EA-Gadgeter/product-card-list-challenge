import { Component, Input } from '@angular/core';

import { CartService } from '@/app/cart/services/cart.service';

import type { Product } from '@/app/products/interfaces/product.interface';

@Component({
  selector: 'products-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input({ required: true })
  public product!: Product;

  public ofThisProductInCart: number = 0;

  constructor(
    private cartService: CartService
  ) {}

  public onAddToCart(product: Product) {
    const newQuantity = this.cartService.addProductToCart({
      id: product.id,
      name: product.name,
      unitPrice: product.price,
      quantity: 1,
      productImage: product.image
    });

    this.ofThisProductInCart = newQuantity;
  }

  public onRemoveProductOfCart(id: number) {
    const newQuantity = this.cartService.removeProductFromCart(id);

    this.ofThisProductInCart = newQuantity;
  }
}
