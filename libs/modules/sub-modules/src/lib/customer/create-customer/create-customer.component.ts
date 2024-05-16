import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from '@mdtx/forms';
import { ICustomer } from '@mdtx/common';
import { CustomerService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-customer',
  standalone: true,
  imports: [CommonModule, CustomerFormComponent],
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.scss',
  providers: [CustomerService],
})
export class CreateCustomerComponent {
  constructor(protected readonly service: CustomerService) {}
  handleSubmit(customer: ICustomer) {
    this.service.add(customer);
  }
}
