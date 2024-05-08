import { Component } from '@angular/core';
import { FullscreenDirective } from './fullscreen.directive';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'mdtx-fullscreen-component',
  standalone: true,
  imports: [FullscreenDirective, MatButtonModule],
  template: `
    <div
      #elementRef
      style="background-color: orange; width: 100%; height: 100%;"
    >
      <button [mdtxFullscreen]="elementRef">FullScreen</button>
    </div>
  `,
})
export class FullscreenComponent {}
