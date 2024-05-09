import { Component } from '@angular/core';
import { CommonFormModule } from '../form';

@Component({
  selector: 'mdtx-input-text',
  standalone: true,
  imports: [CommonFormModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
})
export class InputTextComponent {}
