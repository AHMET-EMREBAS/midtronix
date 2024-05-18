import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFilterDirective } from '@mdtx/material/core';
@Component({
  selector: 'mdtx-input-quantity',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    InputFilterDirective,
  ],
  templateUrl: './input-quantity.component.html',
  styleUrl: './input-quantity.component.scss',
})
export class InputQuantityComponent {
  readonly inputFilter = /[0-9]/;
  readonly inputValueFilter = /^[1-9]\d{0,3}$/;

  @Input() layoutDirection: 'horizontal' | 'verticle' = 'horizontal';

  @Input() value = 0;

  @Output() quantityValueChange = new EventEmitter<number>();

  emitChange() {
    this.quantityValueChange.emit(this.value);
  }

  increment() {
    this.value++;
    this.emitChange();
  }

  descrement() {
    if (this.value > 0) {
      this.value--;
      this.emitChange();
    }
  }
}
