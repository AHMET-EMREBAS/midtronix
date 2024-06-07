import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  InputTextComponent,
  InputCheckboxComponent,
} from '@mdtx/material/form';
@Component({
  selector: 'mdtx-create',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    InputCheckboxComponent,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  formGroup = this.builder.group({
    name: [''],
    active: [''],
  });

  constructor(protected readonly builder: FormBuilder) {}
}
