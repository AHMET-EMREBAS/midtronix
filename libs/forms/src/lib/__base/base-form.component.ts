import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormComponent } from '@mdtx/material/form';
import { Observable, debounceTime } from 'rxjs';

@Component({ template: '' })
export class BaseFormComponent implements FormComponent, AfterViewInit {
  /**
   * FormGroup
   */
  @Input() resourceFormGroup = this.createFormGroup();

  /**
   * Emits form value when form submit
   */
  @Output() submitEvent = new EventEmitter();

  /**
   * Subscribe form value change
   */
  valueChange$!: Observable<any>;

  /**
   * Subscribe form status change
   */
  statusChange$!: Observable<any>;

  ngAfterViewInit(): void {
    this.valueChange$ = this.resourceFormGroup?.valueChanges.pipe(
      debounceTime(600)
    );
    this.statusChange$ = this.resourceFormGroup?.statusChanges.pipe(
      debounceTime(600)
    );
  }

  /**
   * Submit form
   */
  formSubmit() {
    this.submitEvent.emit(this.resourceFormGroup.value);
  }

  /**
   * Reset form
   */
  formReset() {
    this.resourceFormGroup.reset();
  }

  /**
   * Get the formControl from the formGroup
   * @param name formControlName
   * @returns
   */
  control(name: string) {
    const formControl = this.resourceFormGroup.get(name) as FormControl;
    if (!formControl) throw new Error(`${name} |  FormControl is not found!`);
    return formControl;
  }

  createFormGroup(): FormGroup {
    throw new Error('Not implemented!');
  }

  isFormInvalid() {
    return this.resourceFormGroup.invalid;
  }
}
