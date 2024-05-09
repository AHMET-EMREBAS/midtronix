import { Component } from '@angular/core';
import { CommonFormModule } from '../form';
import { MatListModule } from '@angular/material/list';
import { InputChipSelectComponent } from '../input-chip-select/input-chip-select.component';
@Component({
  selector: 'mdtx-input-list-select',
  standalone: true,
  imports: [CommonFormModule, MatListModule],
  templateUrl: './input-list-select.component.html',
  styleUrl: './input-list-select.component.scss',
})
export class InputListSelectComponent extends InputChipSelectComponent {}
