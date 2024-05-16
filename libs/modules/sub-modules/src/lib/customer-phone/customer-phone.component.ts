import { Component } from '@angular/core';
import { ModuleLayoutComponent } from '@mdtx/material/layout';

@Component({
  selector: 'mdtx-customer-phone',
  standalone: true,
  imports: [ModuleLayoutComponent],
  templateUrl: './customer-phone.component.html',
  styleUrl: './customer-phone.component.scss',
})
export class CustomerPhoneComponent {}
