import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  DateRangeSelectionStrategies,
  provideDateRangeSelectionStrategy,
} from './strategies';
import { InputDateRangeComponent } from './input-date-range.component';

@Component({
  selector: 'mdtx-five-day-date-range',
  standalone: true,
  imports: [InputDateRangeComponent],
  providers: [
    provideNativeDateAdapter(),
    provideDateRangeSelectionStrategy(DateRangeSelectionStrategies.FIVE),
  ],
  template: `
    <mdtx-input-date-range
      [inputName]="inputName"
      [prefixIcon]="prefixIcon"
      [label]="label"
    ></mdtx-input-date-range>
  `,
})
export class InputFiveDayDateRangeComponent extends InputDateRangeComponent {
  readonly __component = InputDateRangeComponent;
}

@Component({
  selector: 'mdtx-three-day-date-range',
  standalone: true,
  imports: [InputDateRangeComponent],
  providers: [
    provideNativeDateAdapter(),
    provideDateRangeSelectionStrategy(DateRangeSelectionStrategies.THREE),
  ],
  template: `
    <mdtx-input-date-range
      [inputName]="inputName"
      [prefixIcon]="prefixIcon"
      [label]="label"
    ></mdtx-input-date-range>
  `,
})
export class InputTreeDayDateRangeComponent extends InputDateRangeComponent {
  readonly __component = InputDateRangeComponent;
}
