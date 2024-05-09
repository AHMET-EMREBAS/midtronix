import { AfterViewInit, Component, Input } from '@angular/core';
import { InputBaseComponent } from '../input-base';
import { CommonFormModule } from '../form';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { InputValidator } from '@mdtx/material/core';

@Component({
  selector: 'mdtx-input-number',
  standalone: true,
  imports: [CommonFormModule, MatAutocompleteModule],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss',
})
export class InputNumberComponent
  extends InputBaseComponent
  implements AfterViewInit
{
  @Input() minValue?: number;
  @Input() maxValue?: number;
  @Input() textSuffix?: string;
  @Input() textPrefix?: string;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();

    const validators = InputValidator.create(this.inputName)
      .min(this.minValue)
      .max(this.maxValue)
      .build();

    this.formControl.addValidators(validators);
  }
}
