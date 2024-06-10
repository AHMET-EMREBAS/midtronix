import { Component, Input } from '@angular/core';
import { CommonFormModule } from '../form';
import { MatSelectModule } from '@angular/material/select';
import { InputChipSelectComponent } from '../input-chip-select/input-chip-select.component';

@Component({
  selector: 'mdtx-input-select',
  standalone: true,
  imports: [CommonFormModule, MatSelectModule],
  templateUrl: './input-select.component.html',
  styleUrl: './input-select.component.scss',
})
export class InputSelectComponent extends InputChipSelectComponent {}
