import { Component } from '@angular/core';
import { BaseFormComponent } from './base-form.component';
import { InputTextComponent } from '../input-text/input-text.component';
import { InputNumberComponent } from '../input-number/input-number.component';
import { InputAutocompleteComponent } from '../input-autocomplete/input-autocomplete.component';
import { InputChipSelectComponent } from '../input-chip-select/input-chip-select.component';
import { InputDateComponent } from '../input-date/input-date.component';
import { InputDateRangeComponent } from '../input-date-range/input-date-range.component';
import { InputTimeComponent } from '../input-time/input-time.component';
import { InputRadioComponent } from '../input-radio/input-radio.component';
import { InputCheckboxComponent } from '../input-checkbox/input-checkbox.component';
import { InputSliderComponent } from '../input-slider/input-slider.component';
import { InputTextareaComponent } from '../input-textarea/input-textarea.component';
import { InputEditorComponent } from '../input-editor/input-editor.component';
import { InputLikeComponent } from '../input-like/input-like.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { provideMatFormFieldOptions } from '@mdtx/material/core';

@Component({
  selector: 'mdtx-sample-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    // Input components
    InputTextComponent,
    InputTextareaComponent,
    InputNumberComponent,
    InputAutocompleteComponent,
    InputChipSelectComponent,
    InputDateComponent,
    InputDateRangeComponent,
    InputTimeComponent,
    InputRadioComponent,
    InputCheckboxComponent,
    InputSliderComponent,
    InputEditorComponent,
    InputLikeComponent,
  ],
  standalone: true,
  providers: [provideMatFormFieldOptions({ appearance: 'outline' })],
  template: `
    <form
      [formGroup]="formGroup"
      style="padding: 1em; display: flex; flex-direction: column; gap: 1em;"
    >
      <mdtx-input-text
        inputName="firstName"
        label="What is your name?"
        [maxLength]="30"
        [minLength]="3"
      ></mdtx-input-text>

      <mdtx-input-number
        inputName="age"
        label="How old are you?"
        [minValue]="18"
      ></mdtx-input-number>

      <div style="display: flex; gap: 1em;">
        <button
          mat-raised-button
          color="primary"
          type="button"
          (click)="formSubmit()"
        >
          Submit
        </button>
        <button mat-stroked-button type="button" (click)="formReset()">
          Reset
        </button>
      </div>
    </form>
  `,
})
export class SampleFormComponent extends BaseFormComponent {}
