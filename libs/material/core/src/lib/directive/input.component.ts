import { Component } from '@angular/core';
import { InputDirective } from './input.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mdtx-input-directive-test',
  standalone: true,
  imports: [CommonModule, InputDirective],
  template: ` <div>
    <input
      #firstName="mdtxInput"
      mdtxInput
      type="text"
      name="firstName"
      minlength="3"
      maxlength="30"
    />

    <span class="error" *ngIf="firstName.errorMessage() as error">
      {{ error }}
    </span>
  </div>`,
})
export class InputDirectiveComponent {}
