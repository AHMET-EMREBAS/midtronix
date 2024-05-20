import { NgModule } from '@angular/core';
import {
  PosLayoutCartListDirective,
  PosLayoutCartPriceDirective,
  PosLayoutProductListDirective,
  PosLayoutToolbarDirective,
} from './pos-layout.directive';
import { TemplateOutletComponent } from '../template-outlet/template-outlet.component';
import { CommonModule } from '@angular/common';
import { PosLayoutComponent } from './pos-layout.component';

const Components = [
  PosLayoutComponent,
  PosLayoutToolbarDirective,
  PosLayoutProductListDirective,
  PosLayoutCartListDirective,
  PosLayoutCartPriceDirective,
];
@NgModule({
  declarations: [...Components],
  imports: [CommonModule, TemplateOutletComponent],
  exports: [...Components],
})
export class PosLayoutModule {}
