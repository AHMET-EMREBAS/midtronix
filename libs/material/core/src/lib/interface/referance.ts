import { ElementRef, TemplateRef } from '@angular/core';

export interface IElementRef<T> {
  elementRef: ElementRef<T>;
}
export interface ITemplateRef<T> {
  templateRef: TemplateRef<T>;
}
