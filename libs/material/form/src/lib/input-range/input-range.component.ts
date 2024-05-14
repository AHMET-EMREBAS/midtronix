import { Component, Input } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { InputBaseComponent } from '../input-base';
import { CommonFormModule } from '../form';

@Component({
  selector: 'mdtx-input-range',
  standalone: true,
  imports: [CommonFormModule, MatSliderModule],
  templateUrl: './input-range.component.html',
  styleUrl: './input-range.component.scss',
})
export class InputRangeComponent extends InputBaseComponent {
  @Input() min = 0;
  @Input() max = 10;
  @Input() step = 1;
}
