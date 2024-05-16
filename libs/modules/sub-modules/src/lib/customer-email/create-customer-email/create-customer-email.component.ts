import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerEmailFormComponent } from '@mdtx/forms';
import { ICustomerEmail } from '@mdtx/common';
import { CustomerEmailService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-customer-email',
  standalone: true,
  imports: [CommonModule, CustomerEmailFormComponent],
  templateUrl: './create-customer-email.component.html',
  styleUrl: './create-customer-email.component.scss',
  providers: [CustomerEmailService],
})
export class CreateCustomerEmailComponent {
  constructor(protected readonly service: CustomerEmailService) {}
  handleSubmit(customerEmail: ICustomerEmail) {
    this.service.add(customerEmail);
  }
}
