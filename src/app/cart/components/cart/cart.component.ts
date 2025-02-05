import { Component } from '@angular/core';
8
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'cart-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(
    private cartService: CartService
  ) {}

  public get cart() {
    return this.cartService.cart;
  }
}
