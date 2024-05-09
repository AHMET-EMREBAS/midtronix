import { Component, Input } from '@angular/core';
import { InputBaseComponent } from '../input-base';
import { CommonFormModule } from '../form';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'mdtx-input-number',
  standalone: true,
  imports: [CommonFormModule, MatAutocompleteModule],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss',
})
export class InputNumberComponent extends InputBaseComponent {
  @Input() textSuffix?: string;
  @Input() textPrefix?: string;
}
