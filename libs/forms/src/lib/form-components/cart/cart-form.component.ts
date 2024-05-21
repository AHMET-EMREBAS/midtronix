import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonFormModule } from '@mdtx/material/form';
import { BaseFormComponent } from '../../__base';
import { CartFormBuilder } from '../../form-builders';
import {
  CustomerSearchComponent,
  UserSearchComponent,
} from '../../search-inputs';

@Component({
  selector: 'mdtx-cart-form',
  standalone: true,
  imports: [CommonFormModule, UserSearchComponent, CustomerSearchComponent],
  templateUrl: './cart-form.component.html',
  styleUrl: './cart-form.component.scss',
})
export class CartFormComponent extends BaseFormComponent {
  override createFormGroup(): FormGroup {
    return new FormGroup({
      ...CartFormBuilder.controls(),
    });
  }
}
