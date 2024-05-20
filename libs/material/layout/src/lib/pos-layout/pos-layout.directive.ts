import { Directive } from '@angular/core';

@Directive({ selector: '[mdtxPosLayout]' })
export class PosLayoutDirective {}

@Directive({ selector: '[mdtxPosLayoutToolbar]' })
export class PosLayoutToolbarDirective {}

@Directive({ selector: '[mdtxPosLayoutProductList]' })
export class PosLayoutProductListDirective {}

@Directive({ selector: '[mdtxPosLayoutCartList]' })
export class PosLayoutCartListDirective {}

@Directive({ selector: '[mdtxPosLayoutCartPrice]' })
export class PosLayoutCartPriceDirective {}