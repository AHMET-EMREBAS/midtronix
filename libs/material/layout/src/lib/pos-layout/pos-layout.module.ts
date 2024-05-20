import { NgModule } from '@angular/core';
import { PosLayoutDirectives } from './pos-layout.directive';
import { PosLayoutComponent } from './pos-layout.component';

@NgModule({
  declarations: [...PosLayoutDirectives],
  imports: [PosLayoutComponent],
  exports: [...PosLayoutDirectives, PosLayoutComponent],
})
export class PosLayoutModule {}
