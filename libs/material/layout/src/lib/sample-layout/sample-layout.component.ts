import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';

@Component({
  selector: 'mdtx-sample-layout',
  standalone: true,
  imports: [CommonModule, LayoutModule, ],
  templateUrl: './sample-layout.component.html',
  styleUrl: './sample-layout.component.scss',
})
export class SampleLayoutComponent {}
