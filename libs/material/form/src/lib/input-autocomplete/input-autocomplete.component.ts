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
import { BehaviorSubject, debounceTime, map } from 'rxjs';
import { IInputOption, LocalStore } from '@mdtx/material/core';
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
  @Input() override defaultValue?: T;
  @Input() labelKey?: string;
  @Input() entityName?: string;
  @Input() isEnumValue?: boolean;
  @Output() openedEvent = new EventEmitter();
  @Output() optionSelectedEvent = new EventEmitter<T>();
  @Input() groupBy?: string;

  search$ = new BehaviorSubject<string>('');

  filteredOptions$ = this.search$.pipe(
    debounceTime(1000),
    map((search) => {
      console.log('TT : ');
      console.log({ search });
      console.log(this.options);
      console.log('TT : ');
      const result = this.options?.filter((option) => {
        const stringValue = JSON.stringify(option).toLowerCase();
        return stringValue.includes(search);
      });

      return result;
    })
  );

  override ngOnInit(): void {
    super.ngOnInit();

    if (this.isEnumValue) {
      if (!this.options) {
        throw new Error('options is required!');
      }
    } else if (!this.options) {
      if (this.entityName) {
        const storeName = this.entityName + '.all';
        const entityStore = LocalStore.createStore(this.entityName + '.all');

        const entities = entityStore.obj<T[]>();
        if (entities) {
          this.options = entities;
        } else {
          throw new Error(
            `${this.entityName} entities are not found in the store ${storeName}`
          );
        }
      }
    }
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();

    if (this.defaultValue) {
      this.inputControl.setValue(this.defaultValue);
    }
  }

  displayWith() {
    if (this.isEnumValue) {
      return (option: any) => option;
    } else {
      return (option: any) => {
        if (option) {
          const label = (option as any)[this.labelKey || 'name'];
          if (!label) return option.id;
          return label;
        }
        return null;
      };
    }
  }

  valueWith(option: T) {
    if (this.isEnumValue) {
      return option;
    } else if (this.optionNameAsValue) {
      return (
        (option as any) &&
        ((option as any).name || (option as any)[this.labelKey ?? 'id'])
      );
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
