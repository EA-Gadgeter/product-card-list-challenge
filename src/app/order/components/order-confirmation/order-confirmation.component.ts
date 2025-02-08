import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

import { CartService } from '@/app/cart/services/cart.service';
import { OrderModalService } from '../../services/order-modal.service';

@Component({
  selector: 'order-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css'
})
export class OrderConfirmationComponent implements OnInit {
  @ViewChild('orderModal', { static: true })
  dialogElement!: ElementRef<HTMLDialogElement>;

  constructor(
    private orderModalService: OrderModalService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.orderModalService.dialogElement = this.dialogElement;
  }

  public get cart() {
    return this.cartService.cart;
  }

  public onStartNewOrder() {
    this.orderModalService.closeModal();
    this.cartService.clearCart();
  }
}
