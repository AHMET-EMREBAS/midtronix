import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { InputBaseComponent } from '.';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { BehaviorSubject, debounceTime, map } from 'rxjs';

@Component({ template: '' })
export class InputEnumSelectBaseComponent<T>
  extends InputBaseComponent
  implements OnInit, AfterViewInit
{
  @ViewChild('inputRef') inputRef!: MatAutocomplete;
  @Input() override prefixIcon = 'event';
  @Input() options!: T[];
  @Input() multiple?: boolean = false;

  @Input() override defaultValue?: T;
  @Output() openedEvent = new EventEmitter();
  @Output() optionSelectedEvent = new EventEmitter<T>();

  search$ = new BehaviorSubject<string>('');

  finterOptions$ = this.search$.pipe(
    debounceTime(1000),
    map((search) => {
      const result = this.options.filter((option) => {
        const stringValue = JSON.stringify(option).toLowerCase();
        return stringValue.includes(search);
      });

      return result;
    })
  );

  override ngOnInit(): void {
    super.ngOnInit();

    if (!this.options) throw new Error('Options is required!');
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();

    if (this.defaultValue) {
      this.inputControl.setValue(this.defaultValue);
    }
  }

  displayWith(option: T) {
    return option;
  }

  valueWith(option: T) {
    return option;
  }

  handleOpendedEvent() {
    this.openedEvent.emit();
  }

  optionSelectedHandler(event: MatAutocompleteSelectedEvent) {
    this.optionSelectedEvent.emit(event.option.value);
  }

  inputEventHandler() {
    const value = this.inputControl.value;
    if (typeof value === 'string') {
      const searchString = value.trim().toLowerCase();
      if (searchString.length > 0) {
        this.inputEvent.emit(searchString);
      }
      this.search$.next(searchString);
    }
  }
}
