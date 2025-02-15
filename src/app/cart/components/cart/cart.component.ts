import { Component } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { OrderModalService } from '@/app/order/services/order-modal.service';

@Component({
  selector: 'cart-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(
    private cartService: CartService,
    private orderModalService: OrderModalService
  ) { }

  public get cart() {
    return this.cartService.cart;
  }

  public get totalPrice() {
    return this.cartService.totalPrice;
  }

  public onConfirmOrder() {
    this.orderModalService.openModal();
  }
}
