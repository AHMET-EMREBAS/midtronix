import { Component } from '@angular/core';
import { BaseAppLayoutComponent } from '../common';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { NavlistComponent } from '../navlist/navlist.component';
import { SidebarComponent } from '@mdtx/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mdtx-module-layout',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    NavlistComponent,
    SidebarComponent,
  ],
  templateUrl: './module-layout.component.html',
  styleUrl: './module-layout.component.scss',
})
export class ModuleLayoutComponent extends BaseAppLayoutComponent {}
