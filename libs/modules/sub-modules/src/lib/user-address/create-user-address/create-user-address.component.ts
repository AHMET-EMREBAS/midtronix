import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddressFormComponent } from '@mdtx/forms';
import { IUserAddress } from '@mdtx/common';
import { UserAddressService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-user-address',
  standalone: true,
  imports: [CommonModule, UserAddressFormComponent],
  templateUrl: './create-user-address.component.html',
  styleUrl: './create-user-address.component.scss',
  providers: [UserAddressService],
})
export class CreateUserAddressComponent {
  constructor(protected readonly service: UserAddressService) {}
  handleSubmit(userAddress: IUserAddress) {
    this.service.add(userAddress);
  }
}
