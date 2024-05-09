import { Component } from '@angular/core';

import { CommonFormModule } from '../form';
import { MatRadioModule } from '@angular/material/radio';
import { InputAutocompleteComponent } from '../input-autocomplete/input-autocomplete.component';
@Component({
  selector: 'mdtx-input-radio',
  standalone: true,
  imports: [CommonFormModule, MatRadioModule],
  templateUrl: './input-radio.component.html',
  styleUrl: './input-radio.component.scss',
})
export class InputRadioComponent extends InputAutocompleteComponent {}
