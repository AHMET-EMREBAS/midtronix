import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonFormModule } from '../form';
import { MatChipListbox, MatChipsModule } from '@angular/material/chips';
import { InputAutocompleteComponent } from '../input-autocomplete/input-autocomplete.component';

@Component({
  selector: 'mdtx-input-chip-select',
  standalone: true,
  imports: [CommonFormModule, MatChipsModule],
  templateUrl: './input-chip-select.component.html',
  styleUrl: './input-chip-select.component.scss',
})
export class InputChipSelectComponent
  extends InputAutocompleteComponent
  implements AfterViewInit
{
  @ViewChild('chipList') chipList!: MatChipListbox;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }
}
