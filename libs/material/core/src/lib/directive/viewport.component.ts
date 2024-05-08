import { Component } from '@angular/core';
import { ViewportDirective } from './viewport.directive';

@Component({
  selector: 'mdtx-viewport',
  standalone: true,
  imports: [ViewportDirective],
  template: `
    <div #viewport="mdtxViewport" mdtxViewport>
      <p>Testing <strong>mdtxViewport</strong> directive</p>
      <table>
        <tr>
          <td><strong>viewport.isHandset()</strong></td>
          <td>{{ viewport.isHandset() }}</td>
        </tr>

        <tr>
          <td><strong>viewport.isNotHandset()</strong></td>
          <td>{{ viewport.isNotHandset() }}</td>
        </tr>
      </table>
    </div>
  `,
})
export class ViewportComponent {}
