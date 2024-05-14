import { AfterViewInit, Component, Input } from '@angular/core';
import { InputBaseComponent } from '../input-base';
import { CommonFormModule } from '../form';

@Component({
  selector: 'mdtx-input-url',
  standalone: true,
  imports: [CommonFormModule],
  templateUrl: './input-url.component.html',
  styleUrl: './input-url.component.scss',
})
export class InputUrlComponent
  extends InputBaseComponent
  implements AfterViewInit
{
  @Input() override prefixIcon = 'link';
  @Input() textSuffix?: string;
  @Input() textPrefix?: string;
}
