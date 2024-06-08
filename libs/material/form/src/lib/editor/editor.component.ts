/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  CollectionBaseService,
  getEntityMetadataToken,
} from '@mdtx/material/core';
import { debounceTime, firstValueFrom } from 'rxjs';
import { ClientEntityMetadata, PropertyMetadata } from '@mdtx/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { InputTextComponent } from '../input-text/input-text.component';
import { InputCheckboxComponent } from '../input-checkbox/input-checkbox.component';
import { InputTextareaComponent } from '../input-textarea/input-textarea.component';
import { InputAutocompleteComponent } from '../input-autocomplete/input-autocomplete.component';
import { InputSelectComponent } from '../input-select/input-select.component';
import { InputListSelectComponent } from '../input-list-select/input-list-select.component';
import { InputSelectEnumComponent } from '../input-select-enum/input-select-enum.component';
@Component({
  selector: 'mdtx-editor',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    InputCheckboxComponent,
    InputTextareaComponent,
    InputAutocompleteComponent,
    InputSelectComponent,
    InputListSelectComponent,
    InputSelectEnumComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
})
export class EditorComponent implements OnInit {
  formFields!: PropertyMetadata<any>[];
  submitLabel = 'Save';
  resetLabel = 'Reset';
  isUpdateForm = false;
  entityId?: string;

  constructor(
    public readonly formGroup: FormGroup,
    protected readonly service: CollectionBaseService,
    @Inject(getEntityMetadataToken())
    protected readonly metadata: ClientEntityMetadata<any>,
    protected readonly route: ActivatedRoute
  ) {}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.entityId = id;
      this.isUpdateForm = true;
      const value = await firstValueFrom(this.service.getByKey(id));
      for (const [k, v] of Object.entries(value)) {
        const control = this.formGroup.get(k);
        if (control) {
          control.setValue(v);
        }
      }
    }

    this.formFields = this.metadata.formControls().map((e) => {
      return {
        ...e,
        control: this.formGroup.get(e.name),
      };
    });

    this.formGroup.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      console.log('Form Value: ', value);
    });
  }

  submitForm() {
    if (this.isUpdateForm && this.entityId) {
      this.service.update({ id: this.entityId, ...this.formGroup.value });
    } else {
      this.service.saveOne(this.formGroup.value);
    }
  }

  resetForm() {
    this.formGroup.reset();
    this.formGroup.markAsUntouched();
  }
}
