import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { MatIconModule } from '@angular/material/icon';
import { NavlistComponent } from '../navlist/navlist.component';
import { RouterModule } from '@angular/router';
import { Navlist } from '@mdtx/material/core';

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
export class SampleLayoutComponent {
  sidenavLeftItems: Navlist = [
    {
      label: 'Home',
      icon: 'home',
      route: 'home',
      color: 'primary',
      children: [
        {
          label: 'Add',
          icon: 'add',
          route: 'create',
        },
        {
          divider: true,
        },
      ],
    },
    {
      label: 'About',
      icon: 'info',
      route: 'about',
      color: 'primary',
      children: [
        {
          label: 'Delete',
          icon: 'delete',
          route: 'delete',
        },
        {
          divider: true,
        },
      ],
    },
  ];
}
