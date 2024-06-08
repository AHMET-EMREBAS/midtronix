/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Icon } from '@mdtx/material/core';

@Component({
  selector: 'mdtx-input-base',
  standalone: true,
  template: '',
})
export class InputBaseComponent implements OnInit, AfterViewInit {
  @Input() inputControl!: FormControl;
  @Input() label!: string;
  @Input() inputName!: string;
  @Input() hint = '';
  @Input() serverSideError = '';
  @Input() prefixIcon?: Icon;
  @Output() inputEvent = new EventEmitter();

  $valueChange!: Observable<any>;
  $statusChange!: Observable<any>;

  ngOnInit(): void {
    if (!this.inputControl) this.inputControl = new FormControl('');
  }

  ngAfterViewInit(): void {
    this.$valueChange = this.inputControl.valueChanges;
    this.$statusChange = this.inputControl.statusChanges;
  }

  getErrorMessage() {
    const errors = this.inputControl?.errors;
    if (errors) {
      return Object.values(errors).shift();
    }
    return 'Field is not valid!';
  }

  testid() {
    return 'input-' + this.inputName;
  }

  iconColor() {
    return this.inputControl?.invalid && this.inputControl.touched
      ? 'warn'
      : 'primary';
  }

  clear() {
    this.inputControl.setValue(null);
  }
}
