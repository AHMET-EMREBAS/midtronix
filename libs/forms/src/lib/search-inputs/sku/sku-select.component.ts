import { AsyncPipe, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IInputOption } from '@mdtx/material/core';
import { InputSelectComponent } from '@mdtx/material/form';

@Component({
  imports: [NgIf, AsyncPipe, InputSelectComponent],
  standalone: true,
  template: `<mdtx-input-select
    [multiple]="multiple"
    [options]="options"
    (inputEvent)="inputEventHandler($event)"
  ></mdtx-input-select>`,
})
export class SkuSelectComponent {
  @Input() options!: IInputOption[];
  @Input() multiple = false;
  @Output() inputEvent = new EventEmitter<IInputOption[]>();

  inputEventHandler(event: IInputOption[]) {
    this.inputEvent.emit(event);
  }
}
