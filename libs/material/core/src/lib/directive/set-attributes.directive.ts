import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[mdtxSetAttributes]',
  standalone: true,
})
export class SetAttributesDirective implements AfterViewInit {
  @Input() mdtxSetAttributes?: Partial<HTMLInputElement>;
  constructor(protected readonly ref: ElementRef<HTMLInputElement>) {}

  ngAfterViewInit(): void {
    if (this.mdtxSetAttributes) {
      for (const key in this.mdtxSetAttributes) {
        console.log(key);
      }
    }
  }
}
