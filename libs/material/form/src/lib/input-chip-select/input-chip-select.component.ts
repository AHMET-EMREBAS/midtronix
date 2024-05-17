import { Component, Input, InputOptions } from '@angular/core';
import { CommonFormModule } from '../form';
import { MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { InputAutocompleteComponent } from '../input-autocomplete/input-autocomplete.component';
import { IInputOption } from '@mdtx/material/core';

@Component({
  selector: 'mdtx-input-chip-select',
  standalone: true,
  imports: [CommonFormModule, MatChipsModule],
  templateUrl: './input-chip-select.component.html',
  styleUrl: './input-chip-select.component.scss',
})
export class InputChipSelectComponent extends InputAutocompleteComponent {
  @Input() multiple?: boolean;

}
