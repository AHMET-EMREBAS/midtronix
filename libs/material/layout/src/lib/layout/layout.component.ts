import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule, MenuPositionY } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewportDirective, FullscreenDirective, ScrollDirective } from '@mdtx/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
@Component({
  selector: 'mdtx-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatProgressBarModule,
    FullscreenDirective,
    ViewportDirective,
    ScrollDirective
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
