import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ViewportDirective,
  FullscreenDirective,
  ScrollDirective,
  Icon,
} from '@mdtx/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LayoutDirectives } from './layout.directive';
import { TemplateOutletComponent } from '../template-outlet/template-outlet.component';
import { BaseLayoutComponent } from './base-layout.component';

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
    TemplateOutletComponent,
    FullscreenDirective,
    ViewportDirective,
    ScrollDirective,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  providers: [...LayoutDirectives],
})
export class LayoutComponent extends BaseLayoutComponent {
}
