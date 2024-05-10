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
        [typingDebounceTime]="4000"
        type="text"
        name="firstName"
        minlength="3"
        maxlength="30"
      />
      <span class="material-icons" *ngIf="fn.isTyping()">keyboard</span>
    </div>
    <div>
      <input
        #ln="mdtxInput"
        mdtxInput
        type="text"
        name="lastName"
        [typingDebounceTime]="100"
        [required]="true"
        minlength="3"
        maxlength="30"
      />
      <span class="material-icons" *ngIf="ln.isTyping()">keyboard</span>
    </div>
  `,
})
export class InputDirectiveComponent {}
