import { Injectable } from '@angular/core';
import type { CartItem } from '@/app/cart/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart: CartItem[] = [];

  constructor() { }

  public get cart() {
    return [...this._cart];
  }

  public addProductToCart(item: CartItem): void {
    const productIndex = this._cart.findIndex(cartItem => cartItem.id === item.id);

    if (productIndex === -1) {
      this._cart.push(item);
      return;
    }

    this._cart[productIndex].quantity++;
  }
}
