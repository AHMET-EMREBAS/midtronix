import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoleFormComponent } from '@mdtx/forms';
import { ICustomerRole } from '@mdtx/common';
import { CustomerRoleService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-customer-role',
  standalone: true,
  imports: [CommonModule, CustomerRoleFormComponent],
  templateUrl: './create-customer-role.component.html',
  styleUrl: './create-customer-role.component.scss',
  providers: [CustomerRoleService],
})
export class CreateCustomerRoleComponent {
  constructor(protected readonly service: CustomerRoleService) {}
  handleSubmit(customerRole: ICustomerRole) {
    this.service.add(customerRole);
  }
}
