import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberComponent } from '@mdtx/material/form';
import { FormControl, Validators } from '@angular/forms';
import { PriceLevelSearchComponent } from '@mdtx/forms';

@Component({
  selector: 'mdtx-pos-order-editor',
  standalone: true,
  imports: [CommonModule, InputNumberComponent, PriceLevelSearchComponent],
  templateUrl: './pos-order-editor.component.html',
  styleUrl: './pos-order-editor.component.scss',
})
export class PosOrderEditorComponent {
  quantityControl = new FormControl(0, [Validators.min(1)]);
}
