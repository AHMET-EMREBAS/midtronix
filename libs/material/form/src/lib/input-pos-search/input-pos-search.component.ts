import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '../input-text/input-text.component';
import { InputBaseComponent } from '../input-base';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mdtx-input-pos-search',
  standalone: true,
  imports: [CommonModule, InputTextComponent],
  templateUrl: './input-pos-search.component.html',
  styleUrl: './input-pos-search.component.scss',
})
export class InputPosSearchComponent extends InputBaseComponent {
  override inputControl: FormControl<any> = new FormControl('', []);
}
