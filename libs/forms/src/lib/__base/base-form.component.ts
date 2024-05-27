import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormComponent } from '@mdtx/material/form';
import { Observable, Subscription, debounceTime } from 'rxjs';

@Component({ template: '' })
export class BaseFormComponent
  implements FormComponent, AfterViewInit, OnDestroy
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

    if (this.defaultValue) {
      const entries = Object.entries(this.defaultValue);

      for (const [key, value] of entries) {
        const control = this.resourceFormGroup.get(key);

        if (!control) {
          throw new Error(`${key} control does not exist in form group!`);
        }
        control.setValue(value);
      }
    }
  }

  /**
   * Submit form
   */
  formSubmit() {
    this.submitEvent.emit(this.resourceFormGroup.value);
    this.resourceFormGroup.reset();
    this.resourceFormGroup.markAsUntouched();
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

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
