import { NgModule } from '@angular/core';
import { FullscreenDirective, ViewportDirective } from '../directives';
import { CommonModule as NgCommonModule } from '@angular/common';

const modules = [NgCommonModule, FullscreenDirective, ViewportDirective];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class CommonModule {}
