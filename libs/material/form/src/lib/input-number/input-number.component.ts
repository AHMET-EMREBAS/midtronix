import { AfterViewInit, Component, Input } from '@angular/core';
import { InputBaseComponent } from '../input-base';
import { CommonFormModule } from '../form';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ValidatorBuilder } from '@mdtx/material/core';

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
  @Input() override prefixIcon = 'numbers';
  @Input() minValue?: number;
  @Input() maxValue?: number;
  @Input() textSuffix?: string;
  @Input() textPrefix?: string;
  @Input() currency = false;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();

    const validators = new ValidatorBuilder(this.inputName)
      .min(this.minValue)
      .max(this.maxValue)
      .build();

    this.inputControl.addValidators(validators);
  }
}
