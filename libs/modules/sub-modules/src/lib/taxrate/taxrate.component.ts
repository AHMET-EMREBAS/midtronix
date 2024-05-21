import { Component } from '@angular/core';
import { ModuleLayoutComponent } from '@mdtx/material/layout';

@Component({
  selector: 'mdtx-taxrate',
  standalone: true,
  imports: [ModuleLayoutComponent],
  templateUrl: './taxrate.component.html',
  styleUrl: './taxrate.component.scss',
})
export class TaxrateComponent {}
