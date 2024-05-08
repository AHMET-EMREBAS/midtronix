import { Component, Input } from '@angular/core';
import { TypingDirective } from './typing.directive';
import { CommonModule } from '@angular/common';
import { InputDirective } from './input.directive';

@Component({
  selector: 'mdtx-typing-directive-test',
  standalone: true,
  imports: [CommonModule, InputDirective],
  template: `
    <ng-template #first>
      <div>
        <p>Testing <strong>mdtxTyping</strong> directive</p>
        <hr />

        Value :{{ input.value }}
        <input
          #input
          #typing="mdtxInput"
          type="text"
          [typingDebounceTime]="3000"
          mdtxInput
          placeholder="Type something"
        />
        <span>{{ typing.isTyping() ? 'Typing' : 'Not Typing' }}</span>
      </div>
    </ng-template>

    <ng-container *ngTemplateOutlet="first"></ng-container>
    <ng-container *ngTemplateOutlet="first"></ng-container>
    <ng-container *ngTemplateOutlet="first"></ng-container>
    <ng-container *ngTemplateOutlet="first"></ng-container>
  `,
})
export class TypingComponent {
  @Input() debounceTime = 2000;
}
