import { NgTemplateOutlet } from '@angular/common';
import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[mdtxBasePosition]' })
export class BaseLayoutPositionDirective {
  constructor(public readonly templateRef: TemplateRef<NgTemplateOutlet>) {}
}

@Directive({ selector: '[mdtxToolbarLeft]' })
export class LayoutToolbarLeftDirective extends BaseLayoutPositionDirective {}
@Directive({ selector: '[mdtxToolbarRight]' })
export class LayoutToolbarRightDirective extends BaseLayoutPositionDirective {}
@Directive({ selector: '[mdtxToolbarCenter]' })
export class LayoutToolbarCenterDirective extends BaseLayoutPositionDirective {}
@Directive({ selector: '[mdtxStatusbarLeft]' })
export class LayoutStatusbarLeftDirective extends BaseLayoutPositionDirective {}
@Directive({ selector: '[mdtxStatusbarRight]' })
export class LayoutStatusbarRightDirective extends BaseLayoutPositionDirective {}
@Directive({ selector: '[mdtxStatusbarCenter]' })
export class LayoutStatusbarCenterDirective extends BaseLayoutPositionDirective {}
@Directive({ selector: '[mdtxContentTop]' })
export class LayoutContentTopDirective extends BaseLayoutPositionDirective {}
@Directive({ selector: '[mdtxContentBottom]' })
export class LayoutContentBottomDirective extends BaseLayoutPositionDirective {}
@Directive({ selector: '[mdtxContentCenter]' })
export class LayoutContentCenterDirective extends BaseLayoutPositionDirective {}
@Directive({ selector: '[mdtxSidenavLeftTop]' })
export class LayoutSidenavLeftTopDirective extends BaseLayoutPositionDirective {}
@Directive({ selector: '[mdtxSidenavLeftBottom]' })
export class LayoutSidenavLeftBottomDirective extends BaseLayoutPositionDirective {}
@Directive({ selector: '[mdtxSidenavLeftCenter]' })
export class LayoutSidenavLeftCenterDirective extends BaseLayoutPositionDirective {}
@Directive({ selector: '[mdtxSidenavRightTop]' })
export class LayoutSidenavRightTopDirective extends BaseLayoutPositionDirective {}
@Directive({ selector: '[mdtxSidenavRightBottom]' })
export class LayoutSidenavRightBottomDirective extends BaseLayoutPositionDirective {}
@Directive({ selector: '[mdtxSidenavRightCenter]' })
export class LayoutSidenavRightCenterDirective extends BaseLayoutPositionDirective {}

export const LayoutDirectives = [
  LayoutToolbarLeftDirective,
  LayoutToolbarRightDirective,
  LayoutToolbarCenterDirective,
  LayoutStatusbarLeftDirective,
  LayoutStatusbarRightDirective,
  LayoutStatusbarCenterDirective,
  LayoutContentTopDirective,
  LayoutContentBottomDirective,
  LayoutContentCenterDirective,
  LayoutSidenavLeftTopDirective,
  LayoutSidenavLeftBottomDirective,
  LayoutSidenavLeftCenterDirective,
  LayoutSidenavRightTopDirective,
  LayoutSidenavRightBottomDirective,
  LayoutSidenavRightCenterDirective,
];
