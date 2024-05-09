import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  isDevMode,
} from '@angular/core';

@Directive({
  selector: '[mdtxErrorMessage]',
  standalone: true,
})
export class ErrorMessageDirective implements AfterViewInit {
  isDevMode = isDevMode();
  @Input() errorCondition?: boolean;

  constructor(protected readonly ref: ElementRef<HTMLParagraphElement>) {}

  ngAfterViewInit(): void {
    if (this.errorCondition && this.isDevMode) {
      this.ref.nativeElement.hidden = false;

      this.ref.nativeElement.style.fontFamily = `Comfortaa`;
      this.ref.nativeElement.style.color = `red`;
      this.ref.nativeElement.style.border = `1px solid red`;
      this.ref.nativeElement.style.background = `white`;
      this.ref.nativeElement.style.padding = `1em`;
    } else {
      this.ref.nativeElement.hidden = true;
    }
  }
}
