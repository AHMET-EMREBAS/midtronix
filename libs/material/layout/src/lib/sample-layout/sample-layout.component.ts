import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'mdtx-sample-layout',
  standalone: true,
  imports: [CommonModule, LayoutModule, MatListModule, MatIconModule],
  templateUrl: './sample-layout.component.html',
  styleUrl: './sample-layout.component.scss',
})
export class SampleLayoutComponent {}
