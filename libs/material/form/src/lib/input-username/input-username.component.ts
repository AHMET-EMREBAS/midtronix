import { Component } from '@angular/core';
import { InputTextComponent } from '../input-text/input-text.component';
import { CommonFormModule } from '../form';

@Component({
  selector: 'mdtx-input-username',
  standalone: true,
  imports: [CommonFormModule],
  templateUrl: './input-username.component.html',
  styleUrl: './input-username.component.scss',
})
export class InputUsernameComponent extends InputTextComponent {}
