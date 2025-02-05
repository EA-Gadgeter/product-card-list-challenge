import { Component, Input } from '@angular/core';

import { CartService } from '../../services/cart.service';

import type { CartItem } from '../../interfaces';

@Component({
  selector: 'cart-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input({ required: true })
  public cartItemInfo!: CartItem;

  constructor(
    private cartService: CartService
  ) {}
}
