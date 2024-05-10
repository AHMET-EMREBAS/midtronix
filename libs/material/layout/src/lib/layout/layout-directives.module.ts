import { Directive, NgModule } from '@angular/core';

@Directive({ selector: '[mdtxToolbarLeft]' })
export class LayoutToolbarLeftDirective {}
@Directive({ selector: '[mdtxToolbarRight]' })
export class LayoutToolbarRightDirective {}
@Directive({ selector: '[mdtxToolbarCenter]' })
export class LayoutToolbarCenterDirective {}
@Directive({ selector: '[mdtxStatusbarLeft]' })
export class LayoutStatusbarLeftDirective {}
@Directive({ selector: '[mdtxStatusbarRight]' })
export class LayoutStatusbarRightDirective {}
@Directive({ selector: '[mdtxStatusbarCenter]' })
export class LayoutStatusbarCenterDirective {}
@Directive({ selector: '[mdtxContentTop]' })
export class LayoutContentTopDirective {}
@Directive({ selector: '[mdtxContentBottom]' })
export class LayoutContentBottomDirective {}
@Directive({ selector: '[mdtxContentCenter]' })
export class LayoutContentCenterDirective {}
@Directive({ selector: '[mdtxLeftSidenavTop]' })
export class LayoutLeftSidenavTopDirective {}
@Directive({ selector: '[mdtxLeftSidenavBottom]' })
export class LayoutLeftSidenavBottomDirective {}
@Directive({ selector: '[mdtxLeftSidenavCenter]' })
export class LayoutLeftSidenavCenterDirective {}
@Directive({ selector: '[mdtxRightSidenavTop]' })
export class LayoutRightSidenavTopDirective {}
@Directive({ selector: '[mdtxRightSidenavBottom]' })
export class LayoutRightSidenavBottomDirective {}
@Directive({ selector: '[mdtxRightSidenavCenter]' })
export class LayoutRightSidenavCenterDirective {}

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
  LayoutLeftSidenavTopDirective,
  LayoutLeftSidenavBottomDirective,
  LayoutLeftSidenavCenterDirective,
  LayoutRightSidenavTopDirective,
  LayoutRightSidenavBottomDirective,
  LayoutRightSidenavCenterDirective,
];
