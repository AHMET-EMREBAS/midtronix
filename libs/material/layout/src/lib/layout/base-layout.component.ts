import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import {
  LayoutContentBottomDirective,
  LayoutContentCenterDirective,
  LayoutContentCenterLeftDirective,
  LayoutContentCenterRightDirective,
  LayoutContentTopDirective,
  LayoutSidenavLeftBottomDirective,
  LayoutSidenavLeftCenterDirective,
  LayoutSidenavLeftTopDirective,
  LayoutSidenavRightBottomDirective,
  LayoutSidenavRightCenterDirective,
  LayoutSidenavRightTopDirective,
  LayoutStatusbarCenterDirective,
  LayoutStatusbarLeftDirective,
  LayoutStatusbarRightDirective,
  LayoutToolbarCenterDirective,
  LayoutToolbarLeftDirective,
  LayoutToolbarRightDirective,
} from './layout.directive';
import { Icon } from '@mdtx/material/core';

@Component({ template: '' })
export class BaseLayoutComponent {
  /**
   * Enable or disable the component
   */
  @Input() showProgressbar = true;

  /**
   * Enable or disable the component
   */
  @Input() showToolbar = true;

  /**
   * Enable or disable the component
   */
  @Input() showStatusbar = true;

  /**
   * Enable or disable the component
   */
  @Input() showLeftSidenav = true;

  /**
   * Enable or disable the component
   */
  @Input() showRightSidenav = true;

  /**
   * Enable or disable the component
   */
  @Input() progressValue = 100;

  /**
   * Enable or disable the component
   */
  @Input() showLeftSidenavToggle = true;
  /**
   * Enable or disable the component
   */
  @Input() showRightSidenavToggle = true;

  @Input() rightSidenavIcon?: Icon = 'settings';

  @ContentChildren(LayoutToolbarLeftDirective)
  toolbarLeft!: QueryList<LayoutToolbarLeftDirective>;
  @ContentChildren(LayoutToolbarRightDirective)
  toolbarRight!: QueryList<LayoutToolbarRightDirective>;
  @ContentChildren(LayoutToolbarCenterDirective)
  toolbarCenter!: QueryList<LayoutToolbarCenterDirective>;
  @ContentChildren(LayoutStatusbarLeftDirective)
  statusbarLeft!: QueryList<LayoutStatusbarLeftDirective>;
  @ContentChildren(LayoutStatusbarRightDirective)
  statusbarRight!: QueryList<LayoutStatusbarRightDirective>;
  @ContentChildren(LayoutStatusbarCenterDirective)
  statusbarCenter!: QueryList<LayoutStatusbarCenterDirective>;
  @ContentChildren(LayoutContentTopDirective)
  contentTop!: QueryList<LayoutContentTopDirective>;
  @ContentChildren(LayoutContentBottomDirective)
  contentBottom!: QueryList<LayoutContentBottomDirective>;
  @ContentChildren(LayoutContentCenterDirective)
  contentCenter!: QueryList<LayoutContentCenterDirective>;
  @ContentChildren(LayoutContentCenterRightDirective)
  contentCenterRight!: QueryList<LayoutContentCenterDirective>;
  @ContentChildren(LayoutContentCenterLeftDirective)
  contentCenterLeft!: QueryList<LayoutContentCenterDirective>;
  @ContentChildren(LayoutSidenavRightTopDirective)
  sidenavRightTop!: QueryList<LayoutSidenavRightTopDirective>;
  @ContentChildren(LayoutSidenavRightBottomDirective)
  sidenavRightBottom!: QueryList<LayoutSidenavRightBottomDirective>;
  @ContentChildren(LayoutSidenavRightCenterDirective)
  sidenavRightCenter!: QueryList<LayoutSidenavRightCenterDirective>;
  @ContentChildren(LayoutSidenavLeftTopDirective)
  sidenavLeftTop!: QueryList<LayoutSidenavLeftTopDirective>;
  @ContentChildren(LayoutSidenavLeftBottomDirective)
  sidenavLeftBottom!: QueryList<LayoutSidenavLeftBottomDirective>;
  @ContentChildren(LayoutSidenavLeftCenterDirective)
  sidenavLeftCenter!: QueryList<LayoutSidenavLeftCenterDirective>;
}
