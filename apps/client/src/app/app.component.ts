import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  standalone: true,
  imports: [RouterModule, MatSnackBarModule],
  selector: 'mdtx-root',
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {}
