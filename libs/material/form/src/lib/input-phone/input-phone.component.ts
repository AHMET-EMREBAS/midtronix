import { Component, Input } from '@angular/core';
import { InputTextComponent } from '../input-text/input-text.component';
import { CommonFormModule } from '../form';

@Component({
  selector: 'mdtx-input-phone',
  standalone: true,
  imports: [CommonFormModule],
  templateUrl: './input-phone.component.html',
  styleUrl: './input-phone.component.scss',
})
export class InputPhoneComponent extends InputTextComponent {
  @Input() override prefixIcon = 'call';
}
