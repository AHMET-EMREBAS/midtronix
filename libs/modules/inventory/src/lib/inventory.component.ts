import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  standalone: true,
  template: '<router-outlet></router-outlet>',
})
export class InventoryComponent {}
