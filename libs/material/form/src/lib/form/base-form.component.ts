import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';

@Component({
  selector: 'mdtx-base-component',
  standalone: true,
  template: '',
})
export class BaseFormComponent implements AfterViewInit {
  formGroup!: FormGroup;
  @Output() submitEvent = new EventEmitter();

  valueChange$!: Observable<any>;
  statusChange$!: Observable<any>;

  ngAfterViewInit(): void {
    this.valueChange$ = this.formGroup?.valueChanges.pipe(debounceTime(600));
    this.statusChange$ = this.formGroup?.statusChanges.pipe(debounceTime(600));
  }

  formSubmit() {
    console.log('Form is submitting: ', this.formGroup.value);
    this.submitEvent.emit(this.formGroup.value);
  }

  formReset() {
    this.formGroup.reset();
  }

  control(name: string) {
    const formControl = this.formGroup.get(name) as FormControl;
    if (!formControl) throw new Error(`${name} |  FormControl is not found!`);
    return formControl;
  }
}
