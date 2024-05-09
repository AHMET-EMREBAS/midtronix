import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputBaseComponent } from '../input-base';
import { CommonFormModule } from '../form';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { IInputOption } from '@mdtx/material/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, map } from 'rxjs';
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
  @Input() options!: IInputOption[];
  
  filteredOptions$!: Observable<IInputOption[]>;

  override ngOnInit(): void {
    if (!this.options) throw new Error('options is required!');
    this.formControl = new FormControl('', []);
    this.filteredOptions$ = this.formControl.valueChanges.pipe(
      debounceTime(600),
      map((e) => {
        return this.options.filter((o) => o.name.startsWith(e));
      })
    );
    super.ngOnInit();
  }

  displayWith(option: IInputOption) {
    return option.name;
  }
}
