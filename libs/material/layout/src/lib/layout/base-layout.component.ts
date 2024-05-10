import { Component, ContentChildren, QueryList } from '@angular/core';
import {
  LayoutContentBottomDirective,
  LayoutContentCenterDirective,
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

@Component({ template: '' })
export class BaseLayoutComponent {
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
