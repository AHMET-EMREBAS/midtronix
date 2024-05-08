import { Component } from '@angular/core';
import { FullscreenDirective } from './fullscreen.directive';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'mdtx-fullscreen-directive-test',
  standalone: true,
  imports: [FullscreenDirective, MatButtonModule],
  template: `
    <div #elementRef>
      <p>Testing <strong>mdtxFullscreen</strong> directive</p>

      <button #fs="mdtxFullscreen" [mdtxFullscreen]="elementRef">
        {{ fs.isFullscreen() ? 'Minimize' : 'Fullscreen' }}
      </button>
    </div>
  `,
})
export class FullscreenDirectiveComponent {}
