import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import type { CartItem } from '@/app/cart/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart: CartItem[] = [];
  private _totalPrice = 0;

  public deletedItem$ = new Subject<CartItem>();

  public clearedCart$ = new Subject<void>();

  constructor() { }

  public get cart() {
    return [...this._cart];
  }

  public get totalPrice() {
    return this._totalPrice;
  }

  public addProductToCart(item: CartItem): number {
    const productIndex = this._cart.findIndex(cartItem => cartItem.id === item.id);

    if (productIndex === -1) {
      this._cart.push(item);
      this._totalPrice += item.unitPrice;
      return 1 ;
    }

    this._totalPrice += item.unitPrice;
    return ++this._cart[productIndex].quantity;
  }

  public deleteProductFromCartById(id: number) {
    const productIndex = this._cart.findIndex(cartItem => cartItem.id === id);

    if (productIndex === -1) {
      return;
    }

    const pricedReduce = this._cart[productIndex].unitPrice * this._cart[productIndex].quantity;

    this.deletedItem$.next(this._cart[productIndex]);
    this._totalPrice -= pricedReduce;

    this._cart.splice(productIndex, 1);
  }

  public removeProductFromCart(id: number): number {
    const productIndex = this._cart.findIndex(cartItem => cartItem.id === id);

    if (productIndex === -1) {
      return 0;
    }

    if (this._cart[productIndex].quantity > 1) {
      this._totalPrice -= this._cart[productIndex].unitPrice;
      return --this._cart[productIndex].quantity;
    }

    this._totalPrice -= this._cart[productIndex].unitPrice;
    this._cart.splice(productIndex, 1);
    return 0;
  }

  public clearCart() {
    this._cart = [];
    this._totalPrice = 0;
    this.clearedCart$.next();
  }
}
