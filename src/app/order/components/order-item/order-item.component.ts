import { Component, Input } from '@angular/core';

import type { CartItem } from '@/app/cart/interfaces';

@Component({
  selector: 'order-order-item',
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.css'
})
export class OrderItemComponent {
  @Input({ required: true })
  public cartItem!: CartItem;
}
