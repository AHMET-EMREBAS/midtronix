/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, TemplateRef } from '@angular/core';
import { ITemplateRef } from '@mdtx/material/core';

@Directive({ selector: '[mdtxPosLayoutToolbar]' })
export class PosLayoutToolbarDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}

@Directive({ selector: '[mdtxPosLayoutProductList]' })
export class PosLayoutProductListDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}

@Directive({ selector: '[mdtxPosLayoutCartList]' })
export class PosLayoutCartListDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}

@Directive({ selector: '[mdtxPosLayoutCartPrice]' })
export class PosLayoutCartPriceDirective implements ITemplateRef<any> {
  constructor(public readonly templateRef: TemplateRef<any>) {}
}

export const PosLayoutDirectives = [
  PosLayoutToolbarDirective,
  PosLayoutProductListDirective,
  PosLayoutCartListDirective,
  PosLayoutCartPriceDirective,
];
