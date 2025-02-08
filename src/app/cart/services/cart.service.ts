import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import type { CartItem } from '@/app/cart/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart: CartItem[] = [];

  public deletedItem$ = new Subject<CartItem>();

  public clearedCart$ = new Subject<void>();

  constructor() { }

  public get cart() {
    return [...this._cart];
  }

  public addProductToCart(item: CartItem): number {
    const productIndex = this._cart.findIndex(cartItem => cartItem.id === item.id);

    if (productIndex === -1) {
      this._cart.push(item);
      return 1 ;
    }

    return ++this._cart[productIndex].quantity;
  }

  public deleteProductFromCartById(id: number) {
    const productIndex = this._cart.findIndex(cartItem => cartItem.id === id);

    if (productIndex === -1) {
      return;
    }

    this.deletedItem$.next(this._cart[productIndex]);
    this._cart.splice(productIndex, 1);
  }

  public removeProductFromCart(id: number): number {
    const productIndex = this._cart.findIndex(cartItem => cartItem.id === id);

    if (productIndex === -1) {
      return 0;
    }

    if (this._cart[productIndex].quantity > 1) {
      return --this._cart[productIndex].quantity;
    }

    this._cart.splice(productIndex, 1);
    return 0;
  }

  public clearCart() {
    this._cart = [];
    this.clearedCart$.next();
  }
}
