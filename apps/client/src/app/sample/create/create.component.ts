import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  InputTextComponent,
  InputCheckboxComponent,
} from '@mdtx/material/form';
import { CollectionBaseService } from '@mdtx/material/core';
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
  constructor(
    protected readonly service: CollectionBaseService,
    protected readonly builder: FormBuilder,
    protected readonly formGroup: FormGroup
  ) {}
}
