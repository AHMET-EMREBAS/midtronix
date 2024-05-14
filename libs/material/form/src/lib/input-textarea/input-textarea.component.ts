import { AfterViewInit, Component, Input } from '@angular/core';
import { InputBaseComponent } from '../input-base';
import { ValidatorBuilder } from '@mdtx/material/core';
import { CommonFormModule } from '../form';

@Component({
  selector: 'mdtx-input-textarea',
  standalone: true,
  imports: [CommonFormModule],
  templateUrl: './input-textarea.component.html',
  styleUrl: './input-textarea.component.scss',
})
export class InputTextareaComponent
  extends InputBaseComponent
  implements AfterViewInit
{
  @Input() minLength?: number;
  @Input() maxLength?: number;
  @Input() textSuffix?: string;
  @Input() textPrefix?: string;

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();

    const validators = new ValidatorBuilder(this.inputName).longText().build();

    this.inputControl.addValidators(validators);
  }
}
