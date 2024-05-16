import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleFormComponent } from '@mdtx/forms';
import { IRole } from '@mdtx/common';
import { RoleService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-role',
  standalone: true,
  imports: [CommonModule, RoleFormComponent],
  templateUrl: './create-role.component.html',
  styleUrl: './create-role.component.scss',
  providers: [RoleService],
})
export class CreateRoleComponent {
  constructor(protected readonly service: RoleService) {}
  handleSubmit(role: IRole) {
    this.service.add(role);
  }
}
