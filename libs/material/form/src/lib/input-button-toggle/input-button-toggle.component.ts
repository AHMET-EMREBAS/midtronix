import { Component, Input, OnInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { InputBaseComponent } from '../input-base';
import { IInputOption } from '@mdtx/material/core';
import { CommonFormModule } from '../form';
@Component({
  selector: 'mdtx-input-button-toggle',
  standalone: true,
  imports: [CommonFormModule, MatButtonToggleModule],
  templateUrl: './input-button-toggle.component.html',
  styleUrl: './input-button-toggle.component.scss',
})
export class InputButtonToggleComponent
  extends InputBaseComponent
  implements OnInit
{
  @Input() options?: IInputOption[];
}
