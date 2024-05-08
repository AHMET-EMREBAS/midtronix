import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mdtxInput]',
  standalone: true,
  exportAs: 'mdtxInput',
})
export class InputDirective {
  private __isTyping = false;
  private __typingTimer!: any;
  private __dirty?: boolean;

  @Input() typingDebounceTime = 1000;

  @HostListener('input')
  inputHander() {
    this.__dirty = true;
    this.__isTyping = true;
    if (this.__typingTimer) clearTimeout(this.__typingTimer);
    this.__typingTimer = setTimeout(() => {
      this.__isTyping = false;
    }, this.typingDebounceTime);
  }

  constructor(public readonly ref: ElementRef<HTMLInputElement>) {}

  isTyping() {
    return this.__isTyping;
  }

  isDirty() {
    return this.__dirty;
  }
}
