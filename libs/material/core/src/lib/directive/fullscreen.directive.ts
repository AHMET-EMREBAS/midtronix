import { Directive, HostListener, Input } from '@angular/core';
import { IToggleValue } from '../interface';

/**
 * When the user clicks the button with the mdtxFullscreen directive, the screen for the provided element will be toggled.
 */
@Directive({
  selector: '[mdtxFullscreen]',
  standalone: true,
  exportAs: 'mdtxFullscreen',
})
export class FullscreenDirective implements IToggleValue {
  @Input() mdtxFullscreen!: HTMLDivElement;

  @HostListener('click')
  async clickHandler() {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      setTimeout(async () => {
        await this.mdtxFullscreen?.requestFullscreen();
      }, 300);
    }
  }

  isFullscreen() {
    return !!document.fullscreenElement;
  }

  toggleValue<T>(value: T, handsetValue: T): T {
    if (this.isFullscreen()) {
      if (typeof handsetValue == 'function') {
        return handsetValue();
      }
      return handsetValue;
    }
    if (typeof value === 'function') {
      return value();
    }
    return value;
  }
}
