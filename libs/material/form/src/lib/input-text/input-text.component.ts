import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonFormModule } from '../form';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { InputBaseComponent } from '../input-base';
import { InputValidator } from '@mdtx/material/core';

@Component({
  selector: 'mdtx-input-text',
  standalone: true,
  imports: [CommonFormModule, MatAutocompleteModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
})
export class InputTextComponent
  extends InputBaseComponent
  implements AfterViewInit
{
  @Input() minLength?: number;
  @Input() maxLength?: number;
  @Input() textSuffix?: string;
  @Input() textPrefix?: string;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();

    const validators = InputValidator.create(this.inputName)
      .minLength(this.minLength)
      .maxLength(this.maxLength)
      .build();

    this.inputControl.addValidators(validators);
  }
}
