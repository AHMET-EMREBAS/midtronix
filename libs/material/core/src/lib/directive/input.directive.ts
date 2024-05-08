import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import {
  ValidatorFn,
  __email,
  __isRequired,
  __max,
  __maxLength,
  __min,
  __minLength,
  __password,
} from '../validators';

@Directive({
  selector: '[mdtxInput]',
  standalone: true,
  exportAs: 'mdtxInput',
})
export class InputDirective implements OnInit {
  private __isTyping = false;
  private __typingTimer!: any;
  private __dirty?: boolean;
  private __validators: ValidatorFn<any>[] = [];
  private __errorMessage?: string | null;

  @Input() typingDebounceTime = 400;

  @HostListener('input')
  inputHander(event: InputEvent) {
    this.__dirty = true;
    this.__isTyping = true;
    if (this.__typingTimer) clearTimeout(this.__typingTimer);
    this.__typingTimer = setTimeout(() => {
      this.__isTyping = false;

      const errorMessage = this.__validators
        .map((handler) => {
          return handler((event.target as HTMLInputElement).value);
        })
        .shift();

      this.__errorMessage = errorMessage;
    }, this.typingDebounceTime);
  }

  constructor(public readonly ref: ElementRef<HTMLInputElement>) {}

  private addValidator(validatorFn: ValidatorFn<any>) {
    this.__validators.push(validatorFn);
  }

  ngOnInit(): void {
    const { name, required, minLength, maxLength, min, max, type } =
      this.ref.nativeElement;

    if (!name) throw new Error('Input name is required!');
    if (required) this.addValidator(__isRequired(name));
    if (minLength != undefined) this.addValidator(__minLength(name, minLength));
    if (maxLength != undefined) this.addValidator(__maxLength(name, maxLength));
    if (min != undefined) this.addValidator(__min(name, parseInt(min)));
    if (max != undefined) this.addValidator(__max(name, parseInt(max)));
    if (type === 'email') this.addValidator(__email(name));
    if (type === 'password') this.addValidator(__password(name));
  }

  isTyping() {
    return this.__isTyping;
  }

  isDirty() {
    return this.__dirty;
  }

  errorMessage() {
    return this.__errorMessage;
  }
}
