import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/**
 * Append loading icon when user is typing
 */
@Directive({
  selector: '[mdtxTyping]',
  standalone: true,
  exportAs: 'mdtxTyping',
})
export class TypingDirective {

  @Input() mdtxTyping = 400;
  private __isTyping = false;
  private __timer!: any;

  @HostListener('input')
  inputHandler() {
    this.__isTyping = true;

    if (this.__timer) clearTimeout(this.__timer);

    this.__timer = setTimeout(() => {
      this.__isTyping = false;
    }, this.mdtxTyping);
  }

  isTyping() {
    return this.__isTyping;
  }
}
