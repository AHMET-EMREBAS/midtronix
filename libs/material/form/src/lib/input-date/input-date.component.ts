import { Component } from '@angular/core';
import { CommonFormModule } from '../form';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { InputBaseComponent } from '../input-base';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'mdtx-input-date',
  standalone: true,
  imports: [CommonFormModule, MatDatepickerModule],
  templateUrl: './input-date.component.html',
  styleUrl: './input-date.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class InputDateComponent extends InputBaseComponent {}
