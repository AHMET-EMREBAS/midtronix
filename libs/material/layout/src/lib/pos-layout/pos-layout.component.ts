import { Component, ContentChildren, QueryList } from '@angular/core';
import {
  PosLayoutCartListDirective,
  PosLayoutCartPriceDirective,
  PosLayoutProductListDirective,
  PosLayoutToolbarDirective,
} from './pos-layout.directive';

@Component({
  selector: 'mdtx-pos-layout',
  templateUrl: './pos-layout.component.html',
  styleUrl: './pos-layout.component.scss',
})
export class PosLayoutComponent {
  @ContentChildren(PosLayoutToolbarDirective)
  toolbar!: QueryList<PosLayoutToolbarDirective>;

  @ContentChildren(PosLayoutProductListDirective)
  productList!: QueryList<PosLayoutProductListDirective>;

  @ContentChildren(PosLayoutCartListDirective)
  cartList!: QueryList<PosLayoutCartListDirective>;

  @ContentChildren(PosLayoutCartPriceDirective)
  cartPrice!: QueryList<PosLayoutCartPriceDirective>;
}
