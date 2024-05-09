import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
    this.valueChange$ = this.formGroup.valueChanges.pipe(debounceTime(600));
    this.statusChange$ = this.formGroup.statusChanges.pipe(debounceTime(600));
  }

  formSubmit() {
    this.submitEvent.emit(this.formGroup.value);
  }

  formReset() {
    this.formGroup.reset();
  }
}
