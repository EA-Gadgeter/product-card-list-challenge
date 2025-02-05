import { Component } from '@angular/core';

import { CartItem } from '../../interfaces';

@Component({
  selector: 'cart-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  public cartItems: CartItem[] = [
    {
      name: "Classic Tiramisu",
      quantity: 1,
      unitPrice: 5.50,
    },
    {
      name: "Vanilla Bean Crème Brûlée",
      quantity: 4,
      unitPrice: 7.00,
    },
    {
      name: "Vanilla Panna Cotta",
      quantity: 2,
      unitPrice: 6.50,
    }
  ]
}
