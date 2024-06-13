/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AfterViewInit,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  CollectionBaseService,
  LocalStore,
  getEntityMetadataToken,
} from '@mdtx/material/core';
import { Subscription, debounceTime, firstValueFrom } from 'rxjs';
import { ClientEntityMetadata, PropertyMetadata } from '@mdtx/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { InputTextComponent } from '../input-text/input-text.component';
import { InputCheckboxComponent } from '../input-checkbox/input-checkbox.component';
import { InputTextareaComponent } from '../input-textarea/input-textarea.component';
import { InputAutocompleteComponent } from '../input-autocomplete/input-autocomplete.component';
import { InputSelectComponent } from '../input-select/input-select.component';
import { InputListSelectComponent } from '../input-list-select/input-list-select.component';
import { InputSelectEnumComponent } from '../input-select-enum/input-select-enum.component';

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { DataServiceError, EntityActionPayload } from '@ngrx/data';
import { Title } from '@angular/platform-browser';
import { InputNumberComponent } from '../input-number/input-number.component';
import { InputChipSelectComponent } from '../input-chip-select/input-chip-select.component';
import { InputPasswordComponent } from '../input-password/input-password.component';

@Component({
  selector: 'mdtx-editor',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextComponent,
    InputNumberComponent,
    InputCheckboxComponent,
    InputTextareaComponent,
    InputAutocompleteComponent,
    InputSelectComponent,
    InputListSelectComponent,
    InputSelectEnumComponent,
    InputChipSelectComponent,
    InputPasswordComponent,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',

  styles: [
    `
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        min-height: 88vh;
      }
    `,
  ],
})
export class EditorComponent implements OnInit, AfterViewInit, OnDestroy {
  editorStore: LocalStore;
  submitted = false;
  formFields!: PropertyMetadata<any>[];
  submitLabel = 'Save';
  resetLabel = 'Reset';
  isUpdateForm = false;
  entityId?: string;
  entityName!: string;
  sub!: Subscription;
  messagePrefix = 'Created';

  constructor(
    public readonly formGroup: FormGroup,
    protected readonly service: CollectionBaseService,
    @Inject(getEntityMetadataToken())
    protected readonly metadata: ClientEntityMetadata<any>,
    protected readonly route: ActivatedRoute,
    protected readonly router: Router,
    protected readonly snackbar: MatSnackBar,
    protected readonly title: Title
  ) {
    this.entityName = service.entityName;
    this.editorStore = LocalStore.createStore(service.entityName + 'Editor');
  }

  setFormValue(formValue: any) {
    for (const [k, v] of Object.entries(formValue)) {
      const control = this.formGroup.get(k);
      if (control) {
        control.setValue(v);
      }
    }
  }

  async ngOnInit() {
    this.title.setTitle(`${this.submitLabel} ${this.entityName}`);
  }

  async ngAfterViewInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const localStoreValue = this.editorStore.obj();

    if (id) {
      this.submitLabel = 'Update';
      this.messagePrefix = 'Updated';
      this.entityId = id;
      this.isUpdateForm = true;
      const value = await firstValueFrom(this.service.getByKey(id));

      console.log('Found Value : ', value);

      setTimeout(() => {
        this.setFormValue(value);
      }, 1000);
    } else if (localStoreValue) {
      setTimeout(() => {
        this.setFormValue(localStoreValue);
      }, 1000);
    }

    this.formFields = this.metadata.formFieldsWithController().map((e) => {
      const control = this.formGroup.get(e.name);
      return { ...e, control };
    });

    this.formGroup.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      this.editorStore.set(JSON.stringify(value));
    });

    this.sub = this.service.entityActions$.subscribe((event) => {
      console.log(event.type);
      if (
        event.type.endsWith('add-one/success') ||
        event.type.endsWith('update-one/success')
      ) {
        this.successHandler();
      } else if (
        event.type.endsWith('add-one/error') ||
        event.type.endsWith('update-one/error')
      ) {
        this.failiureHandler(event.payload);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
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
    this.editorStore.remove();
  }

  failiureHandler(payload: any) {
    const err = payload as EntityActionPayload<DataServiceError>;
    const __error = err.data?.error?.error?.error;
    const errors = __error?.errors;
    const errorMessage = __error?.message;
    this.snackbar.open(errorMessage, undefined, {
      panelClass: 'error-snackbar',
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000,
    });

    if (errors) {
      for (const e of errors) {
        const control = this.formGroup.get(e.property);
        control?.markAsDirty();
        control?.markAsTouched();
        control?.setErrors(e.constraints);
      }
    }
  }

  successHandler() {
    if (!this.isUpdateForm) this.formGroup.reset();
    if (!this.isUpdateForm) this.editorStore.remove();

    this.snackbar.open(`${this.messagePrefix} ${this.entityName}`, undefined, {
      panelClass: 'success-snackbar',
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000,
    });
  }
}
