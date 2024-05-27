import { Component } from '@angular/core';
import { ModuleLayoutComponent } from '@mdtx/material/layout';

@Component({
  selector: 'mdtx-customer-account',
  standalone: true,
  imports: [ModuleLayoutComponent],
  templateUrl: './customer-account.component.html',
  styleUrl: './customer-account.component.scss',
})
export class CustomerAccountComponent {}
