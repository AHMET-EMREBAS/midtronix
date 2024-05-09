import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonFormModule } from '../form';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { InputBaseComponent } from '../input-base';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'mdtx-input-checkbox',
  standalone: true,
  imports: [CommonFormModule, MatCheckboxModule],
  templateUrl: './input-checkbox.component.html',
  styleUrl: './input-checkbox.component.scss',
})
export class InputCheckboxComponent
  extends InputBaseComponent
  implements OnInit
{
  override ngOnInit(): void {
    this.formControl = new FormControl(false, []);
    super.ngAfterViewInit();
  }
}
