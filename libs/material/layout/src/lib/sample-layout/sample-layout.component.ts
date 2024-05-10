import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { MatIconModule } from '@angular/material/icon';
import { NavlistComponent } from '../navlist/navlist.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mdtx-sample-layout',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    NavlistComponent,
    MatIconModule,
  ],
  templateUrl: './sample-layout.component.html',
  styleUrl: './sample-layout.component.scss',
})
export class SampleLayoutComponent {}
