import { Component } from '@angular/core';
import { CommonFormModule } from '../form';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'mdtx-input-date',
  standalone: true,
  imports: [CommonFormModule, MatDatepickerModule],
  templateUrl: './input-date.component.html',
  styleUrl: './input-date.component.scss',
})
export class InputDateComponent {}
