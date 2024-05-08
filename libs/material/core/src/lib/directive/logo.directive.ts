import { Directive, ElementRef, OnInit } from '@angular/core';
import { IElementRef } from '../types';

@Directive({
  selector: '[mdtxLogo]',
  standalone: true,
})
export class AppLogoDirective implements IElementRef<HTMLImageElement>, OnInit {
  constructor(public elementRef: ElementRef<HTMLImageElement>) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.classList.add('logo');

    this.elementRef.nativeElement.setAttribute(
      'src',
      'assets/icons/icon-72x72.png'
    );
    this.elementRef.nativeElement.setAttribute('alt', 'App Logo');
  }
}
