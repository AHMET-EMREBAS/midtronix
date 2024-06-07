import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';
import { CommonFormModule } from './common-form.module';

@Component({
  selector: 'mdtx-form',
  standalone: true,
  imports: [CommonFormModule],
  template: `
    <form [formGroup]="resourceFormGroup" novalidate>
      <ng-content></ng-content>
      <div class="row sm-col">
        <button mat-raised-button color="primary" (click)="formSubmit()">
          Save Product
        </button>
        <button mat-raised-button color="accent" (click)="formReset()">
          Reset
        </button>
      </div>
    </form>
  `,

  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements AfterViewInit {
  @Input() resourceFormGroup!: FormGroup;

  @Output() submitEvent = new EventEmitter();

  valueChange$!: Observable<any>;
  statusChange$!: Observable<any>;

  ngAfterViewInit(): void {
    this.valueChange$ = this.resourceFormGroup?.valueChanges.pipe(
      debounceTime(600)
    );
    this.statusChange$ = this.resourceFormGroup?.statusChanges.pipe(
      debounceTime(600)
    );
  }

  formSubmit() {
    console.log('Form is submitting: ', this.resourceFormGroup.value);
    this.submitEvent.emit(this.resourceFormGroup.value);
  }

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
}
