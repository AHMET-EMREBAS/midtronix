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
    console.log('Mouse Down: ', event);
    this.startX = event.pageX;
    this.startY = event.pageY;
  }

  @HostListener('mousemove', ['$event'])
  mousemoveHandler(event: any) {
    console.log('Mouse Move: ', event);
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
    this.startX = null;
    this.startY = null;
  }

  @HostListener('scroll', ['$event'])
  scrollHander(event: any) {
    console.log('Scroll: ', event);
  }

  constructor(protected readonly ref: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    if (!this.mdtxScroll) this.mdtxScroll = 'y';
  }
}
