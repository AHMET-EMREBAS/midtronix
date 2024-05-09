import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
import { FormControl, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { provideMatFormFieldOptions } from '@mdtx/material/core';
import { CommonFormModule } from './common-form.module';
import { InputBaseComponent } from '../input-base';

@Component({
  selector: 'mdtx-sample-form',
  imports: [
    CommonFormModule,
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
      style="padding: 1em; display: flex; flex-direction: column; gap: 1em;"
      novalidate
    >
      <mdtx-input-text
        #firstName
        inputName="firstName"
        label="What is your name?"
      ></mdtx-input-text>
      <mdtx-input-number
        inputName="age"
        #age
        label="How old are you?"
      ></mdtx-input-number>
      <mdtx-input-textarea
        inputName="desc"
        #desc
        label="About Yourself"
      ></mdtx-input-textarea>
      <mdtx-input-date
        inputName="dob"
        #dob
        label="Date of birth?"
      ></mdtx-input-date>
      <mdtx-input-time
        inputName="ctime"
        #ctime
        label="Current time?"
      ></mdtx-input-time>
      <mdtx-input-date-range
        inputName="adates"
        #adates
        label="Dates"
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
  @ViewChild('firstName') firstName!: InputBaseComponent;
  @ViewChild('age') age!: InputBaseComponent;
  @ViewChild('desc') desc!: InputBaseComponent;
  @ViewChild('dob') dob!: InputBaseComponent;
  @ViewChild('ctime') ctime!: InputBaseComponent;
  @ViewChild('adates') adates!: InputBaseComponent;

  override ngAfterViewInit(): void {
    this.formGroup = new FormGroup({
      firstName: this.firstName.formControl,
      age: this.age.formControl,
      desc: this.desc.formControl,
      dob: this.dob.formControl,
      ctime: this.ctime.formControl,
      adates: this.adates.formControl,
    });

    this.formGroup.valueChanges.subscribe((data) => {
      console.log(data);
    });

    super.ngAfterViewInit();
  }
}
