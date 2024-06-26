import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'mdtx-root',
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {}
