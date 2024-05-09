import { AfterViewInit, Component } from '@angular/core';
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
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
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
      <!-- Text input -->
      <mdtx-input-text
        [formControl]="firstNameControl"
        inputName="firstName"
        label="What is your name?"
        [maxLength]="30"
        [minLength]="3"
      ></mdtx-input-text>

      <!-- Number input -->
      <mdtx-input-number
        [formControl]="ageControl"
        inputName="age"
        label="How old are you?"
        [minValue]="18"
      ></mdtx-input-number>

      <!-- Textarea -->
      <mdtx-input-textarea
        [formControl]="descriptionControl"
        inputName="description"
        label="Tell me about yourself"
      ></mdtx-input-textarea>

      <!-- date of birth -->
      <mdtx-input-date
        [formControl]="dob"
        inputName="dob"
        label="What is your date of birth?"
      ></mdtx-input-date>

      <!-- Current time -->
      <mdtx-input-time
        [formControl]="ctime"
        label="What is the current time?"
        inputName="currentTime"
      ></mdtx-input-time>

      <!-- Available dates -->
      <mdtx-input-date-range
        [formControl]="availableDate"
        inputName="availableDates"
        label="Select avaialble dates"
      ></mdtx-input-date-range>

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
export class SampleFormComponent
  extends BaseFormComponent
  implements AfterViewInit
{
  firstNameControl = new FormControl('');
  ageControl = new FormControl('');
  descriptionControl = new FormControl('');
  dob = new FormControl('');
  ctime = new FormControl('');
  availableDate = new FormControl('');

  override ngAfterViewInit(): void {
    this.formGroup = new FormGroup({
      firstName: this.firstNameControl,
      age: this.ageControl,
      description: this.descriptionControl,
      dob: this.dob,
      currentTime: this.ctime,
      availableDates: this.availableDate,
    });

    
    super.ngAfterViewInit();
  }
}
