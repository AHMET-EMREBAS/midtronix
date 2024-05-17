import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPermissionFormComponent } from '@mdtx/forms';
import { ICustomerPermission } from '@mdtx/common';
import { CustomerPermissionService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-customer-permission',
  standalone: true,
  imports: [CommonModule, CustomerPermissionFormComponent],
  templateUrl: './create-customer-permission.component.html',
  styleUrl: './create-customer-permission.component.scss',
  providers: [CustomerPermissionService],
})
export class CreateCustomerPermissionComponent {
  constructor(protected readonly service: CustomerPermissionService) {}
  handleSubmit(customerPermission: ICustomerPermission) {
    this.service.add(customerPermission);
  }
}
