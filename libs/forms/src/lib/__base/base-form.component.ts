import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormComponent } from '@mdtx/material/form';
import { Observable, Subscription, debounceTime } from 'rxjs';

@Component({ template: '' })
export class BaseFormComponent
  implements FormComponent, AfterViewInit, OnDestroy, OnChanges
{
  /**
   * FormGroup
   */
  @Input() resourceFormGroup = this.createFormGroup();

  @Input() submitLabel = 'Save';

  @Input() defaultValue?: any;

  /**
   * Emits form value when form submit
   */
  @Output() submitEvent = new EventEmitter();

  @Output() changeEvent = new EventEmitter();

  /**
   * Subscribe form value change
   */
  valueChange$!: Observable<any>;

  /**
   * Subscribe form status change
   */
  statusChange$!: Observable<any>;

  sub!: Subscription;

  ngAfterViewInit(): void {
    this.valueChange$ = this.resourceFormGroup?.valueChanges.pipe(
      debounceTime(600)
    );
    this.statusChange$ = this.resourceFormGroup?.statusChanges.pipe(
      debounceTime(600)
    );

    this.sub = this.valueChange$.subscribe((value) => {
      this.changeEvent.emit(value);
    });

    this.updateDefaultFormValue();
  }

  ngOnChanges() {
    // console.log('BaseFormComponent Change OnChange');
    this.updateDefaultFormValue();
  }

  updateDefaultFormValue() {
    if (this.defaultValue) {
      const entries = Object.entries(this.defaultValue);

      for (const [key, value] of entries) {
        const control = this.resourceFormGroup.get(key);

        // console.log('Default Value ', key, value);

        if (control) {
          control.setValue(value);
        } else {
          console.debug(`FormGroup does not have the key, ${key}`);
        }
      }
    }
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
    this.resourceFormGroup.markAsUntouched();
    for (const c of Object.values(this.resourceFormGroup.controls)) {
      c.reset();
      c.markAsUntouched();
      c.setErrors(null);
    }
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

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
