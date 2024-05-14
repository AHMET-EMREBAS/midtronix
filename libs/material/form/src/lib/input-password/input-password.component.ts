import { Component } from '@angular/core';
import { InputTextComponent } from '../input-text/input-text.component';
import { CommonFormModule } from '../form';

@Component({
  selector: 'mdtx-input-password',
  standalone: true,
  imports: [CommonFormModule],
  templateUrl: './input-password.component.html',
  styleUrl: './input-password.component.scss',
})
export class InputPasswordComponent extends InputTextComponent {
  visible = false;

  toggleVisible() {
    this.visible = !this.visible;
  }
}
