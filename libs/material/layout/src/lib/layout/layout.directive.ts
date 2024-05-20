/* eslint-disable @typescript-eslint/no-explicit-any */

import { Directive, TemplateRef } from '@angular/core';
import { ITemplateRef } from '@mdtx/material/core';

@Directive({ selector: '[mdtxToolbarLeft]' })
export class LayoutToolbarLeftDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
@Directive({ selector: '[mdtxToolbarRight]' })
export class LayoutToolbarRightDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
@Directive({ selector: '[mdtxToolbarCenter]' })
export class LayoutToolbarCenterDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
@Directive({ selector: '[mdtxStatusbarLeft]' })
export class LayoutStatusbarLeftDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
@Directive({ selector: '[mdtxStatusbarRight]' })
export class LayoutStatusbarRightDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
@Directive({ selector: '[mdtxStatusbarCenter]' })
export class LayoutStatusbarCenterDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
@Directive({ selector: '[mdtxContentTop]' })
export class LayoutContentTopDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
@Directive({ selector: '[mdtxContentBottom]' })
export class LayoutContentBottomDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
@Directive({ selector: '[mdtxContentCenter]' })
export class LayoutContentCenterDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
@Directive({ selector: '[mdtxContentCenterRight]' })
export class LayoutContentCenterRightDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}

@Directive({ selector: '[mdtxContentCenterLeft]' })
export class LayoutContentCenterLeftDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
@Directive({ selector: '[mdtxSidenavLeftTop]' })
export class LayoutSidenavLeftTopDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
@Directive({ selector: '[mdtxSidenavLeftBottom]' })
export class LayoutSidenavLeftBottomDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
@Directive({ selector: '[mdtxSidenavLeftCenter]' })
export class LayoutSidenavLeftCenterDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
@Directive({ selector: '[mdtxSidenavRightTop]' })
export class LayoutSidenavRightTopDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
@Directive({ selector: '[mdtxSidenavRightBottom]' })
export class LayoutSidenavRightBottomDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}
@Directive({ selector: '[mdtxSidenavRightCenter]' })
export class LayoutSidenavRightCenterDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}

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
  LayoutContentCenterRightDirective,
  LayoutContentCenterLeftDirective,
  LayoutSidenavLeftTopDirective,
  LayoutSidenavLeftBottomDirective,
  LayoutSidenavLeftCenterDirective,
  LayoutSidenavLeftCenterDirective,
  LayoutSidenavRightTopDirective,
  LayoutSidenavRightBottomDirective,
  LayoutSidenavRightCenterDirective,
];
