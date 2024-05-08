import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'mdtx-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() type!: string;
  @Input() inputName!: string;
  @Input() prefixIcon = 'info';
  @Input() formControl!: FormControl;
  @Input() options?: Partial<HTMLInputElement>;

  errorMessage(): string {
    return Object.values(this.formControl.errors ?? {}).pop();
  }
}
