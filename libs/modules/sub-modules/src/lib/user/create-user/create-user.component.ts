import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from '@mdtx/forms';
import { IUser } from '@mdtx/common';
import { UserService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-user',
  standalone: true,
  imports: [CommonModule, UserFormComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
  providers: [UserService],
})
export class CreateUserComponent {
  constructor(protected readonly service: UserService) {}
  handleSubmit(user: IUser) {
    this.service.add(user);
  }
}
