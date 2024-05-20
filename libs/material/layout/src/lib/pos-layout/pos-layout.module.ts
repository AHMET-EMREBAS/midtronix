import { NgModule } from '@angular/core';
import { PosLayoutComponent } from './pos-layout.component';
import {
  PosLayoutCartListDirective,
  PosLayoutCartPriceDirective,
  PosLayoutProductListDirective,
  PosLayoutToolbarDirective,
} from './pos-layout.directive';
import { TemplateOutletComponent } from '../template-outlet/template-outlet.component';
import { CommonModule } from '@angular/common';

const Components = [
  PosLayoutToolbarDirective,
  PosLayoutProductListDirective,
  PosLayoutCartListDirective,
  PosLayoutCartPriceDirective,
  PosLayoutComponent,
];

@NgModule({
  declarations: [...Components],
  imports: [CommonModule, TemplateOutletComponent],
  exports: [...Components],
})
export class PosLayoutModule {}
