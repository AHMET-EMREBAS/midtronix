import { Directive, HostListener, Input } from '@angular/core';

/**
 * When the user clicks the button with the mdtxFullscreen directive, the screen for the provided element will be toggled.
 */
@Directive({
  selector: '[mdtxFullscreen]',
  standalone: true,
  exportAs: 'mdtxFullscreen',
})
export class FullscreenDirective {
  @Input() mdtxFullscreen!: HTMLDivElement;
  @HostListener('click')
  async clickHandler() {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      console.log('What is going on here?');
    } else {
      setTimeout(async () => {
        await this.mdtxFullscreen?.requestFullscreen();
      }, 300);
    }
  }

  isFullscreen() {
    return !!document.fullscreenElement;
  }
}
