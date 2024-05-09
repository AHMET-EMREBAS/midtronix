import { Injectable, Type } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import {
  DateRange,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
  MatDateRangeSelectionStrategy,
} from '@angular/material/datepicker';

export function createDayRangeSelectionStrategy(daynum: number) {
  @Injectable()
  class ___DayRangeSelectionStrategy<D>
    implements MatDateRangeSelectionStrategy<D>
  {
    constructor(public readonly dateAdaptor: DateAdapter<D>) {}

    selectionFinished(date: D | null): DateRange<D> {
      return this.createRange(date);
    }

    createPreview(activeDate: D | null): DateRange<D> {
      return this.createRange(activeDate);
    }

    public createRange(date: D | null): DateRange<D> {
      if (date) {
        const start = this.dateAdaptor.addCalendarDays(
          date,
          -1 * Math.floor(daynum / 2)
        );
        const end = this.dateAdaptor.addCalendarDays(
          date,
          Math.floor(daynum / 2) - (daynum % 2 == 0 ? 1 : 0)
        );
        return new DateRange<D>(start, end);
      }

      return new DateRange<D>(null, null);
    }
  }

  return ___DayRangeSelectionStrategy;
}

export class DateRangeSelectionStrategies {
  static readonly TEN = createDayRangeSelectionStrategy(10);
  static readonly SEVEN = createDayRangeSelectionStrategy(7);
  static readonly SIX = createDayRangeSelectionStrategy(6);
  static readonly FIVE = createDayRangeSelectionStrategy(5);
  static readonly FOUR = createDayRangeSelectionStrategy(4);
  static readonly THREE = createDayRangeSelectionStrategy(3);
  static readonly TWO = createDayRangeSelectionStrategy(2);
}

export function provideDateRangeSelectionStrategy<T>(
  strategy: Type<MatDateRangeSelectionStrategy<T>>
) {
  return {
    provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
    useClass: strategy,
  };
}
