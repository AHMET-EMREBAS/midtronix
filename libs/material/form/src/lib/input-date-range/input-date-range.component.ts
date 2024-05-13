import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonFormModule } from '../form';
import {
  MatDateRangePicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { InputBaseComponent } from '../input-base';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
  selector: 'mdtx-input-date-range',
  standalone: true,
  imports: [CommonFormModule, MatDatepickerModule],
  templateUrl: './input-date-range.component.html',
  styleUrl: './input-date-range.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class InputDateRangeComponent
  extends InputBaseComponent
  implements OnInit, OnDestroy
{
  @Input() startDateLabel = 'Start Date';
  @Input() endDateLabel = 'End Date';

  @ViewChild('dateRangePicker') dateRangePicker!: MatDateRangePicker<any>;
  protected sub!: Subscription;

  dateRange = new FormGroup({
    start: new FormControl(new Date(year, month, today.getDate())),
    end: new FormControl(new Date(year, month, today.getDate())),
  });

  override ngOnInit(): void {
    super.ngOnInit();
    this.sub = this.dateRange.valueChanges
      .pipe(debounceTime(600))
      .subscribe((value) => {
        this.inputControl.setValue(value);
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
