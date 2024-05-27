import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { InputBaseComponent } from '../input-base';
import { CommonFormModule } from '../form';
import {
  MatAutocomplete,
  MatAutocompleteModule,
} from '@angular/material/autocomplete';
import { IInputOption } from '@mdtx/material/core';
import { Observable, debounceTime, map, startWith } from 'rxjs';
@Component({
  selector: 'mdtx-input-autocomplete',
  standalone: true,
  imports: [CommonFormModule, MatAutocompleteModule],
  templateUrl: './input-autocomplete.component.html',
  styleUrl: './input-autocomplete.component.scss',
})
export class InputAutocompleteComponent
  extends InputBaseComponent
  implements OnInit
{
  @ViewChild('inputRef') inputRef!: MatAutocomplete;
  @Input() optionNameAsValue = false;
  @Input() override prefixIcon = 'event';
  @Input() options!: IInputOption[];
  @Input() multiple?: boolean = false;
  @Input() defaultValue?: IInputOption;

  filteredOptions$!: Observable<IInputOption[]>;
  
  override ngOnInit(): void {
    super.ngOnInit();

    if (!this.options) throw new Error('Options is required!');

    this.filteredOptions$ = this.inputControl.valueChanges.pipe(
      startWith(''),
      debounceTime(1000),
      map((search: string) => {
        if (
          typeof search === 'string' &&
          search.trim().length > 0 &&
          this.options
        ) {
          const result = this.options.filter((option) => {
            return option.name?.toLowerCase().includes(search?.toLowerCase());
          });

          if (result && result.length > 0)
            this.inputControl.setValue(result[0]);

          return result;
        }
        return this.options;
      })
    );

    if (this.defaultValue) {
      this.inputControl.setValue(this.defaultValue);
    }
  }

  displayWith(option: IInputOption) {
    return option && option.name;
  }

  valueWith(option: IInputOption) {
    if (this.optionNameAsValue) {
      return option && option.name;
    }
    return option;
  }
}
