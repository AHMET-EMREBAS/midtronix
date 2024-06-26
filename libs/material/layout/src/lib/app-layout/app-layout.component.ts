import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { NavlistComponent } from '../navlist/navlist.component';
import { SidebarComponent } from '@mdtx/material/toolbar';
import { BaseAppLayoutComponent } from '../common';

@Component({
  selector: 'mdtx-app-layout',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    NavlistComponent,
    SidebarComponent,
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent extends BaseAppLayoutComponent {}
