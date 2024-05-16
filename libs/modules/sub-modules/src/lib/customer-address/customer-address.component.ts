import { Component } from '@angular/core';
import { ModuleLayoutComponent } from '@mdtx/material/layout';

@Component({
  selector: 'mdtx-customer-address',
  standalone: true,
  imports: [ModuleLayoutComponent],
  templateUrl: './customer-address.component.html',
  styleUrl: './customer-address.component.scss',
})
export class CustomerAddressComponent {}
