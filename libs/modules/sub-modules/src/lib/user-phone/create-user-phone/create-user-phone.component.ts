import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPhoneFormComponent } from '@mdtx/forms';
import { IUserPhone } from '@mdtx/common';
import { UserPhoneService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-user-phone',
  standalone: true,
  imports: [CommonModule, UserPhoneFormComponent],
  templateUrl: './create-user-phone.component.html',
  styleUrl: './create-user-phone.component.scss',
  providers: [UserPhoneService],
})
export class CreateUserPhoneComponent {
  constructor(protected readonly service: UserPhoneService) {}
  handleSubmit(userPhone: IUserPhone) {
    this.service.add(userPhone);
  }
}
