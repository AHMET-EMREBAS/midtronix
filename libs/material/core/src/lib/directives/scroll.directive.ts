import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[mdtxScroll]',
  standalone: true,
})
export class ScrollDirective {
  startX: number | null = null;
  startY: number | null = null;

  @HostListener('mousedown')
  mousedownHandler(event: any) {
    this.startX = event.pageX;
    this.startY = event.pageY;
  }

  @HostListener('mousemove')
  mousemoveHandler(event: any) {
    if (this.startX !== null && this.startY !== null) {
      const deltaX = this.startX - event.pageX;
      const deltaY = this.startY - event.pageY;

      // If horizontal scroll detected, prevent default vertical scroll behavior
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        event.preventDefault();
        window.scrollBy(deltaX, 0);
      }

      this.startX = event.pageX;
      this.startY = event.pageY;
    }
  }

  @HostListener('mouseup')
  mouseupHander() {
    this.startX = null;
    this.startY = null;
  }
}
