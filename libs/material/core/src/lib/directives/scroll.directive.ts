import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[mdtxScroll]',
  standalone: true,
})
export class ScrollDirective implements OnInit {
  @Input() mdtxScroll?: 'x' | 'y';

  startX: number | null = null;
  startY: number | null = null;

  @HostListener('mousedown', ['$event'])
  mousedownHandler(event: any) {
    this.cursorPointer();
    this.startX = event.pageX;
    this.startY = event.pageY;
  }

  @HostListener('mousemove', ['$event'])
  mousemoveHandler(event: any) {
    if (this.startX !== null && this.startY !== null) {
      const deltaX = this.startX - event.pageX;
      const deltaY = this.startY - event.pageY;

      // If horizontal scroll detected, prevent default vertical scroll behavior
      if (this.mdtxScroll === 'x') {
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
          event.preventDefault();
          this.ref.nativeElement.scrollBy(deltaX, 0);
        }
      } else if (this.mdtxScroll === 'y') {
        // if (Math.abs(deltaY) < Math.abs(deltaX)) {
        event.preventDefault();
        this.ref.nativeElement.scrollBy(0, deltaY);
        // }
      }

      this.startX = event.pageX;
      this.startY = event.pageY;
    }
  }

  @HostListener('mouseup')
  mouseupHander() {
    this.cursorDefault();
    this.startX = null;
    this.startY = null;
  }

  constructor(protected readonly ref: ElementRef<HTMLElement>) {}

  protected cursorPointer() {
    if (this.mdtxScroll === 'x') {
      this.ref.nativeElement.style.setProperty('cursor', 'w-resize');
    } else if (this.mdtxScroll === 'y') {
      this.ref.nativeElement.style.setProperty('cursor', 's-resize');
    }
  }
  protected cursorDefault() {
    this.ref.nativeElement.style.setProperty('cursor', 'initial');
  }
  ngOnInit(): void {
    if (!this.mdtxScroll) this.mdtxScroll = 'y';
  }
}
