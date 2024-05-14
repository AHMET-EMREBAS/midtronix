import { AfterViewInit, Component, Input } from '@angular/core';
import { CommonFormModule } from '../form';
import { InputBaseComponent } from '../input-base';

import { MatChipsModule } from '@angular/material/chips';
import { ValidatorBuilder } from '@mdtx/material/core';
@Component({
  selector: 'mdtx-input-time',
  standalone: true,
  imports: [CommonFormModule, MatChipsModule],
  templateUrl: './input-time.component.html',
  styleUrl: './input-time.component.scss',
})
export class InputTimeComponent
  extends InputBaseComponent
  implements AfterViewInit
{
  @Input() beforeHour?: number;
  @Input() afterHour?: number;

  getList(start: number, end: number) {
    return ' '
      .repeat(end - start)
      .split(' ')
      .map((e) => start++);
  }

  d = new Date();
  some = {
    hour: this.d.getHours(),
  };

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();

    const validators = new ValidatorBuilder(this.inputName ?? 'some').build();
    this.inputControl.addValidators(validators);
  }
}
