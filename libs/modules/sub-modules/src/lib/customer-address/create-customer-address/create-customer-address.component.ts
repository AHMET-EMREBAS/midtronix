import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddressFormComponent } from '@mdtx/forms';
import { ICustomerAddress } from '@mdtx/common';
import { CustomerAddressService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-customer-address',
  standalone: true,
  imports: [CommonModule, CustomerAddressFormComponent],
  templateUrl: './create-customer-address.component.html',
  styleUrl: './create-customer-address.component.scss',
  providers: [CustomerAddressService],
})
export class CreateCustomerAddressComponent {
  constructor(protected readonly service: CustomerAddressService) {}
  handleSubmit(customerAddress: ICustomerAddress) {
    this.service.add(customerAddress);
  }
}
