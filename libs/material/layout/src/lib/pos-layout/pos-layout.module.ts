import { NgModule } from '@angular/core';
import { PosLayoutComponent } from './pos-layout.component';
import {
  PosLayoutCartListDirective,
  PosLayoutCartPriceDirective,
  PosLayoutProductListDirective,
  PosLayoutToolbarDirective,
} from './pos-layout.directive';
import { TemplateOutletComponent } from '../template-outlet/template-outlet.component';

const Directives = [
  TemplateOutletComponent,
  PosLayoutToolbarDirective,
  PosLayoutProductListDirective,
  PosLayoutCartListDirective,
  PosLayoutCartPriceDirective,
];

const Modules = [PosLayoutComponent];
@NgModule({
  declarations: [...Directives, PosLayoutComponent],
  exports: [...Modules],
})
export class PosLayoutModule {}
