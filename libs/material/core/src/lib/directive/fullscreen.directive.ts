import { Directive, ElementRef, HostListener } from '@angular/core';

/**
 * When user clicks the button with the mdtxFullscreen directive, the screen for the provided element will be toggled.
 */
@Directive({
  selector: '[mdtxFullscreen]',
})
export class FullscreenDirective {
  @HostListener('click')
  clickHandler() {
    this.ref.nativeElement.requestFullscreen();
  }

  constructor(protected readonly ref: ElementRef<HTMLButtonElement>) {}
}
