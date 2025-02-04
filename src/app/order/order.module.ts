import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';



@NgModule({
  declarations: [
    OrderConfirmationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrderConfirmationComponent
  ]
})
export class OrderModule { }
