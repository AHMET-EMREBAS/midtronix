import { Component, Inject, Input, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { Icon, Navlist } from '@mdtx/material/core';
import { NavlistComponent } from '../navlist/navlist.component';
import { Title } from '@angular/platform-browser';
import { SidebarComponent } from '@mdtx/material/toolbar';
import {
  ToolbarLeftProvider,
  ToolbarRightProvider,
  ToolbarCenterProvider,
  StatusbarLeftProvider,
  StatusbarRightProvider,
  StatusbarCenterProvider,
  ContentTopProvider,
  ContentBottomProvider,
  ContentCenterProvider,
  ContentCenterLeftProvider,
  ContentCenterRightProvider,
  SidenavRightTopProvider,
  SidenavRightBottomProvider,
  SidenavRightCenterProvider,
  SidenavLeftTopProvider,
  SidenavLeftBottomProvider,
  SidenavLeftCenterProvider,
} from './layout-providers';

@Component({
  selector: 'mdtx-base-app-layout',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    NavlistComponent,
    SidebarComponent,
  ],
  template: '',
})
export class BaseAppLayoutComponent {
  @Input() rightSidenavIcon?: Icon = 'settings';
  @Input() progressValue = 100;
  @Input() toolbarLeft?: Navlist;
  @Input() toolbarRight?: Navlist;
  @Input() toolbarCenter?: Navlist;
  @Input() statusbarLeft?: Navlist;
  @Input() statusbarRight?: Navlist;
  @Input() statusbarCenter?: Navlist;
  @Input() contentTop?: Navlist;
  @Input() contentBottom?: Navlist;
  @Input() contentCenter?: Navlist;
  @Input() contentCenterLeft?: Navlist;
  @Input() contentCenterRight?: Navlist;
  @Input() sidenavRightTop?: Navlist;
  @Input() sidenavRightBottom?: Navlist;
  @Input() sidenavRightCenter?: Navlist;
  @Input() sidenavLeftTop?: Navlist;
  @Input() sidenavLeftBottom?: Navlist;
  @Input() sidenavLeftCenter?: Navlist;

  constructor(
    public readonly title: Title,
    @Optional() @Inject(ToolbarLeftProvider.token()) toolbarLeft?: Navlist,
    @Optional() @Inject(ToolbarRightProvider.token()) toolbarRight?: Navlist,
    @Optional()
    @Inject(ToolbarCenterProvider.token())
    toolbarCenter?: Navlist,
    @Optional()
    @Inject(StatusbarLeftProvider.token())
    statusbarLeft?: Navlist,
    @Optional()
    @Inject(StatusbarRightProvider.token())
    statusbarRight?: Navlist,
    @Optional()
    @Inject(StatusbarCenterProvider.token())
    statusbarCenter?: Navlist,
    @Optional() @Inject(ContentTopProvider.token()) contentTop?: Navlist,
    @Optional()
    @Inject(ContentBottomProvider.token())
    contentBottom?: Navlist,
    @Optional()
    @Inject(ContentCenterProvider.token())
    contentCenter?: Navlist,

    @Optional()
    @Inject(ContentCenterLeftProvider.token())
    contentCenterLeft?: Navlist,

    @Optional()
    @Inject(ContentCenterRightProvider.token())
    contentCenterRight?: Navlist,

    @Optional()
    @Inject(SidenavRightTopProvider.token())
    sidenavRightTop?: Navlist,
    @Optional()
    @Inject(SidenavRightBottomProvider.token())
    sidenavRightBottom?: Navlist,
    @Optional()
    @Inject(SidenavRightCenterProvider.token())
    sidenavRightCenter?: Navlist,
    @Optional()
    @Inject(SidenavLeftTopProvider.token())
    sidenavLeftTop?: Navlist,
    @Optional()
    @Inject(SidenavLeftBottomProvider.token())
    sidenavLeftBottom?: Navlist,
    @Optional()
    @Inject(SidenavLeftCenterProvider.token())
    sidenavLeftCenter?: Navlist
  ) {
    if (toolbarLeft) this.toolbarLeft = toolbarLeft;
    if (toolbarRight) this.toolbarRight = toolbarRight;
    if (toolbarCenter) this.toolbarCenter = toolbarCenter;
    if (statusbarLeft) this.statusbarLeft = statusbarLeft;
    if (statusbarRight) this.statusbarRight = statusbarRight;
    if (statusbarCenter) this.statusbarCenter = statusbarCenter;
    if (contentTop) this.contentTop = contentTop;
    if (contentBottom) this.contentBottom = contentBottom;
    if (contentCenter) this.contentCenter = contentCenter;

    if (contentCenterLeft) this.contentCenterLeft = contentCenterLeft;
    if (contentCenterRight) this.contentCenterRight = contentCenterRight;

    if (sidenavRightTop) this.sidenavRightTop = sidenavRightTop;
    if (sidenavRightBottom) this.sidenavRightBottom = sidenavRightBottom;
    if (sidenavRightCenter) this.sidenavRightCenter = sidenavRightCenter;
    if (sidenavLeftTop) this.sidenavLeftTop = sidenavLeftTop;
    if (sidenavLeftBottom) this.sidenavLeftBottom = sidenavLeftBottom;
    if (sidenavLeftCenter) this.sidenavLeftCenter = sidenavLeftCenter;
  }
}
