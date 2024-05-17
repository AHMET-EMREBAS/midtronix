import { Component } from '@angular/core';
import { ModuleLayoutComponent } from '@mdtx/material/layout';

@Component({
  selector: 'mdtx-customer-role',
  standalone: true,
  imports: [ModuleLayoutComponent],
  templateUrl: './customer-role.component.html',
  styleUrl: './customer-role.component.scss',
})
export class CustomerRoleComponent {}
