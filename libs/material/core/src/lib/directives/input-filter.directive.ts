import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mdtxInputFilter]',
  standalone: true,
})
export class InputFilterDirective {
  @Input() mdtxInputFilter!: RegExp;
  @Input() mdtxInputValueFilter!: RegExp;

  private previousValue?: any;
  private actaulValue?: any;

  protected isKeyValid(key: string) {
    return this.mdtxInputFilter.test(key);
  }
  protected isActualValueValid(actualValue: string) {
    return this.mdtxInputValueFilter.test(actualValue);
  }

  @HostListener('keydown', ['$event'])
  keydown(event: KeyboardEvent) {
    // Not required for now!
  }

  @HostListener('keypress', ['$event'])
  keypress(event: KeyboardEvent) {
    const inputKey = event.key;

    if (!this.isKeyValid(inputKey)) {
      event.preventDefault();
      return;
    }
    const actualValue = this.elementRef.nativeElement.value;

    if (this.isActualValueValid(actualValue)) {
      this.previousValue = this.elementRef.nativeElement.value;
    }
  }

  @HostListener('keyup', ['$event'])
  keyup(event: KeyboardEvent) {
    const actualValue = this.elementRef.nativeElement.value;

    if (actualValue)
      if (!this.isActualValueValid(actualValue)) {
        this.elementRef.nativeElement.value = this.previousValue;
        event.preventDefault();
        return;
      }
  }
  constructor(public readonly elementRef: ElementRef<HTMLInputElement>) {}
}
