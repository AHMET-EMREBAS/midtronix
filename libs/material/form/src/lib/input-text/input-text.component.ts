import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonFormModule } from '../form';
import { InputBaseComponent } from '../input-base';

@Component({
  selector: 'mdtx-input-text',
  standalone: true,
  imports: [CommonFormModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
})
export class InputTextComponent
  extends InputBaseComponent
  implements AfterViewInit
{
  @Input() inputType = 'text';
  @Input() minLength?: number;
  @Input() maxLength?: number;
  @Input() textSuffix?: string;
  @Input() textPrefix?: string;
}
