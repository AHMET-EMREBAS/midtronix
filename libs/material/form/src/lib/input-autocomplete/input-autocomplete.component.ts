import { Component, Input, OnInit } from '@angular/core';
import { InputBaseComponent } from '../input-base';
import { CommonFormModule } from '../form';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
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
  @Input() options!: IInputOption[];

  filteredOptions$!: Observable<IInputOption[]>;

  override ngOnInit(): void {
    super.ngOnInit();
    if (!this.options) console.error('Options is required!');

    this.filteredOptions$ = this.formControl.valueChanges.pipe(
      startWith(''),
      debounceTime(600),
      map((e) => {
        return e
          ? this.options.filter((o) =>
              o.name.toLowerCase().startsWith(e.toLowerCase())
            )
          : this.options.filter((e) => e);
      })
    );
  }

  displayWith(option: IInputOption) {
    return option.name;
  }
}
