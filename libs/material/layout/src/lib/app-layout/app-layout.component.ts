import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { Navlist } from '@mdtx/material/core';
@Component({
  selector: 'mdtx-app-layout',
  standalone: true,
  imports: [CommonModule, LayoutModule, RouterModule],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent {
  @Input() toolbarLeft?: Navlist;
  @Input() toolbarRight?: Navlist;
  @Input() toolbarCenter?: Navlist;
  @Input() statusbarLeft?: Navlist;
  @Input() statusbarRight?: Navlist;
  @Input() statusbarCenter?: Navlist;
  @Input() contentTop?: Navlist;
  @Input() contentBottom?: Navlist;
  @Input() contentCenter?: Navlist;
  @Input() sidenavRightTop?: Navlist;
  @Input() sidenavRightBottom?: Navlist;
  @Input() sidenavRightCenter?: Navlist;
  @Input() sidenavLeftTop?: Navlist;
  @Input() sidenavLeftBottom?: Navlist;
  @Input() sidenavLeftCenter?: Navlist;
}
