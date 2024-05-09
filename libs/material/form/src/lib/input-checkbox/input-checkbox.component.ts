import { Component } from '@angular/core';
import { CommonFormModule } from '../form';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InputBaseComponent } from '../input-base';
@Component({
  selector: 'mdtx-input-checkbox',
  standalone: true,
  imports: [CommonFormModule, MatCheckboxModule],
  templateUrl: './input-checkbox.component.html',
  styleUrl: './input-checkbox.component.scss',
})
export class InputCheckboxComponent extends InputBaseComponent {}
