import { Component, Inject, Input, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Navlist,
  ViewportDirective,
  createValueProvider,
} from '@mdtx/material/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

export const {
  injectFn: InjectNavlist,
  provideFn: provideNavlist,
  tokenFn: getNavlistToken,
} = createValueProvider<Navlist>('navlist');

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
  @Input() baseRoute = '';
  @Input() items?: Navlist;
  constructor(@Optional() @Inject(getNavlistToken()) items: Navlist) {
    if (items) {
      this.items = items;
    }
  }
}
