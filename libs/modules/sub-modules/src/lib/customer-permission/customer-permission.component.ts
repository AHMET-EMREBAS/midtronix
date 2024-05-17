import { Component } from '@angular/core';
import { ModuleLayoutComponent } from '@mdtx/material/layout';

@Component({
  selector: 'mdtx-customer-permission',
  standalone: true,
  imports: [ModuleLayoutComponent],
  templateUrl: './customer-permission.component.html',
  styleUrl: './customer-permission.component.scss',
})
export class CustomerPermissionComponent {}
