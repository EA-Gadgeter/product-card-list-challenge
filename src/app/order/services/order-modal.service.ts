import {ElementRef, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderModalService {
  private _dialogElement?: ElementRef<HTMLDialogElement>;

  public set dialogElement (dialogElement: ElementRef<HTMLDialogElement>) {
    this._dialogElement = dialogElement;
  }

  public openModal() {
    this._dialogElement?.nativeElement.showModal();
  }

  public closeModal() {
    this._dialogElement?.nativeElement.close();
  }
}
