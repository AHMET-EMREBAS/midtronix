import { Component } from '@angular/core';
import { InputEnumSelectBaseComponent } from '../input-base';
import { MatSelectModule } from '@angular/material/select';
import { CommonFormModule } from '../form';

@Component({
  selector: 'mdtx-input-select-enum',
  standalone: true,
  imports: [CommonFormModule, MatSelectModule],
  templateUrl: './input-select-enum.component.html',
  styleUrl: './input-select-enum.component.scss',
})
export class InputSelectEnumComponent extends InputEnumSelectBaseComponent<string> {}
