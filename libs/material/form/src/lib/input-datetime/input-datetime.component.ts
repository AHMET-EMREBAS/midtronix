import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CommonFormModule } from '../form';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { InputBaseComponent } from '../input-base';

@Component({
  selector: 'mdtx-input-datetime',
  standalone: true,
  imports: [CommonFormModule, MatDatepickerModule],
  templateUrl: './input-datetime.component.html',
  styleUrl: './input-datetime.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class InputDatetimeComponent extends InputBaseComponent {}
