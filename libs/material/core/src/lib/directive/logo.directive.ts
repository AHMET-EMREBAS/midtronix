import { Directive, ElementRef, OnInit } from '@angular/core';
import { IElementRef } from '../interface';

export const APP_LOGO_PATH = 'assets/icons/icon-72x72.png';
@Directive({
  selector: '[mdtxLogo]',
  standalone: true,
})
export class AppLogoDirective implements IElementRef<HTMLImageElement>, OnInit {
  constructor(public elementRef: ElementRef<HTMLImageElement>) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.classList.add('logo');
    this.elementRef.nativeElement.setAttribute('src', APP_LOGO_PATH);
    this.elementRef.nativeElement.setAttribute('alt', $localize`App Logo`);
  }
}
