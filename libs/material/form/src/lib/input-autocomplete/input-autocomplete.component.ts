import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { InputBaseComponent } from '../input-base';
import { CommonFormModule } from '../form';
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { IInputOption } from '@mdtx/material/core';
import { BehaviorSubject, debounceTime, map } from 'rxjs';
@Component({
  selector: 'mdtx-input-autocomplete',
  standalone: true,
  imports: [CommonFormModule, MatAutocompleteModule],
  templateUrl: './input-autocomplete.component.html',
  styleUrl: './input-autocomplete.component.scss',
})
export class InputAutocompleteComponent<T extends IInputOption = IInputOption>
  extends InputBaseComponent
  implements OnInit, AfterViewInit
{
  @ViewChild('inputRef') inputRef!: MatAutocomplete;
  @Input() optionNameAsValue = false;
  @Input() override prefixIcon = 'event';
  @Input() options!: T[];
  @Input() multiple?: boolean = false;
  @Input() defaultValue?: T;

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
    return option && option.name;
  }

  valueWith(option: T) {
    if (this.optionNameAsValue) {
      return option && option.name;
    }
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
