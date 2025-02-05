import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    OrderConfirmationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    OrderConfirmationComponent
  ]
})
export class OrderModule { }
