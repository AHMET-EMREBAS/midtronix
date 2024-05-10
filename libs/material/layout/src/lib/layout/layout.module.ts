import { NgModule } from '@angular/core';
import { LayoutDirectives } from './layout.directive';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [...LayoutDirectives],
  imports: [LayoutComponent],
  exports: [...LayoutDirectives, LayoutComponent],
})
export class LayoutModule {}
