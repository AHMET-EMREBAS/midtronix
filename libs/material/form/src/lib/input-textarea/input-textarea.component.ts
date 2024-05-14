import { AfterViewInit, Component, Input } from '@angular/core';
import { InputBaseComponent } from '../input-base';
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

  @Input() override prefixIcon = 'description';
  @Input() minLength?: number;
  @Input() maxLength?: number;
  @Input() textSuffix?: string;
  @Input() textPrefix?: string;
}
