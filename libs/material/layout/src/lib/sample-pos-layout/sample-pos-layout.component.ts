import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosLayoutModule } from '../pos-layout/pos-layout.module';

@Component({
  selector: 'mdtx-sample-pos-layout',
  standalone: true,
  imports: [CommonModule, PosLayoutModule],
  templateUrl: './sample-pos-layout.component.html',
  styleUrl: './sample-pos-layout.component.scss',
})
export class SamplePosLayoutComponent {}
