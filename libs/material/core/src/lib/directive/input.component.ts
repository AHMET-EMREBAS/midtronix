import { Component } from '@angular/core';
import { InputDirective } from './input.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mdtx-input-directive-test',
  standalone: true,
  imports: [CommonModule, InputDirective],
  template: `
    <div>
      <input
        #fn="mdtxInput"
        mdtxInput
        type="text"
        name="firstName"
        minlength="3"
        maxlength="30"
      />
      <span class="material-icons" *ngIf="fn.isTyping()">keyboard</span>
      <span class="error"> {{ fn.errorMessage() }} </span>
    </div>
    <div>
      <input
        #ln="mdtxInput"
        mdtxInput
        type="text"
        name="lastName"
        [required]="true"
        minlength="3"
        maxlength="30"
      />
      <span class="material-icons" *ngIf="ln.isTyping()">keyboard</span>
      <span class="error"> {{ ln.errorMessage() }} </span>
    </div>
  `,
})
export class InputDirectiveComponent {}
