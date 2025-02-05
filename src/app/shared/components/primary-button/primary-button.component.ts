import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css'
})
export class PrimaryButtonComponent {
  @Input()
  public btnText: string = "";
}
