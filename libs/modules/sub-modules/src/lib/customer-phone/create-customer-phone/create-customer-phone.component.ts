import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerPhoneFormComponent } from '@mdtx/forms';
import { ICustomerPhone } from '@mdtx/common';
import { CustomerPhoneService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-customer-phone',
  standalone: true,
  imports: [CommonModule, CustomerPhoneFormComponent],
  templateUrl: './create-customer-phone.component.html',
  styleUrl: './create-customer-phone.component.scss',
  providers: [CustomerPhoneService],
})
export class CreateCustomerPhoneComponent {
  constructor(protected readonly service: CustomerPhoneService) {}
  handleSubmit(customerPhone: ICustomerPhone) {
    this.service.add(customerPhone);
  }
}
