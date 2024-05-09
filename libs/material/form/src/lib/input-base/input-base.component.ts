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
  @Input() formControl!: FormControl;

  @Input() inputName!: string;

  @Input() label!: string;

  @Input() hint = '';
  /**
   * Validation error message comming from the server
   */
  @Input() serverSideError = '';

  @Output() inputEvent = new EventEmitter();

  @Input() prefixIcon?: Icon;

  $valueChange!: Observable<any>;
  $statusChange!: Observable<any>;
  protected __validateInputs() {
    if (!this.formControl) console.error('formControl is required!');
    if (!this.inputName) console.error('inputName is required!');
    if (!this.label) console.error('label is required!');

    if (!this.formControl) this.formControl = new FormControl();
  }

  ngOnInit(): void {
    this.__validateInputs();
  }

  ngAfterViewInit(): void {
    this.$valueChange = this.formControl.valueChanges.pipe(debounceTime(600));
    this.$statusChange = this.formControl.statusChanges.pipe(debounceTime(600));
  }
}
