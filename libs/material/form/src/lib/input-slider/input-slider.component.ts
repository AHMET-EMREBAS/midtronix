import { Component, Input } from '@angular/core';
import { InputBaseComponent } from '../input-base';
import { CommonFormModule } from '../form';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'mdtx-input-slider',
  standalone: true,
  imports: [CommonFormModule, MatSlideToggleModule],
  templateUrl: './input-slider.component.html',
  styleUrl: './input-slider.component.scss',
})
export class InputSliderComponent extends InputBaseComponent {
  @Input() activeLabel?: string | undefined = undefined;

  getLabel() {
    return this.inputControl.value == true
      ? this.activeLabel ?? this.label
      : this.label;
  }
}
