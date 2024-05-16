import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEmailFormComponent } from '@mdtx/forms';
import { IUserEmail } from '@mdtx/common';
import { UserEmailService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-user-email',
  standalone: true,
  imports: [CommonModule, UserEmailFormComponent],
  templateUrl: './create-user-email.component.html',
  styleUrl: './create-user-email.component.scss',
  providers: [UserEmailService],
})
export class CreateUserEmailComponent {
  constructor(protected readonly service: UserEmailService) {}
  handleSubmit(userEmail: IUserEmail) {
    this.service.add(userEmail);
  }
}
