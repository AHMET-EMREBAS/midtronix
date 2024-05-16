/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';
import { Icon } from '@mdtx/material/core';

@Component({
  selector: 'mdtx-input-base',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-base.component.html',
  styleUrl: './input-base.component.scss',
})
export class InputBaseComponent implements OnInit, AfterViewInit {
  @Input() inputControl!: FormControl;
  @Input() label!: string;
  @Input() inputName!: string;
  @Input() hint = '';
  @Input() serverSideError = '';
  @Output() inputEvent = new EventEmitter();
  @Input() prefixIcon?: Icon;

  $valueChange!: Observable<any>;
  $statusChange!: Observable<any>;

  ngOnInit(): void {
    if (!this.inputControl) this.inputControl = new FormControl();
  }

  ngAfterViewInit(): void {
    this.$valueChange = this.inputControl.valueChanges.pipe(debounceTime(600));
    this.$statusChange = this.inputControl.statusChanges.pipe(
      debounceTime(600)
    );
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
}
