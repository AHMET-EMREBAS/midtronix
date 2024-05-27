import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAccountFormComponent } from '@mdtx/forms';
import { ICustomerAccount } from '@mdtx/common';
import { CustomerAccountService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-customer-account',
  standalone: true,
  imports: [CommonModule, CustomerAccountFormComponent],
  templateUrl: './create-customer-account.component.html',
  styleUrl: './create-customer-account.component.scss',
  providers: [CustomerAccountService],
})
export class CreateCustomerAccountComponent {
  constructor(protected readonly service: CustomerAccountService) {}
  handleSubmit(customerAccount: ICustomerAccount) {
    this.service.add(customerAccount);
  }
}
