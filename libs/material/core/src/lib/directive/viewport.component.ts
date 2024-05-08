import { Component, OnInit } from '@angular/core';
import { ViewportDirective } from './viewport.directive';

@Component({
  selector: 'mdtx-viewport-component',
  standalone: true,
  imports: [ViewportDirective],
  template: `
    <div #viewport="mdtxViewport" mdtxViewport>
      <strong>Is handset: </strong> <span>{{ viewport.isHandset() }}</span>
      <strong>Is not handset: </strong>
      <span>{{ viewport.isNotHandset() }}</span>
    </div>
  `,
})
export class NameComponent {}
