import { Component, Inject, Input, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Navlist,
  NavlistItem,
  ViewportDirective,
  createValueProvider,
} from '@mdtx/material/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

export const NavlistProvider = createValueProvider<Navlist>('navlist');
export const BaseRouteProvider = createValueProvider<string>('baseRoute');
@Component({
  selector: 'mdtx-navlist',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    ViewportDirective,
    MatButtonModule,
    MatTooltipModule,
  ],
  templateUrl: './navlist.component.html',
  styleUrl: './navlist.component.scss',
})
export class NavlistComponent {
  @Input() inToolbar?: boolean;
  @Input() items?: Navlist;

  constructor(@Optional() @Inject(NavlistProvider.token()) items?: Navlist) {
    if (items) this.items = items;
  }

  handle(item: NavlistItem) {
    console.log('Is Handler working ? ');
    if (item.handler) {
      item.handler(item);
    }
  }
}
