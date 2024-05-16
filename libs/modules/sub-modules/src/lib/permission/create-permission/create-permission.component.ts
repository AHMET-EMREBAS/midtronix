import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionFormComponent } from '@mdtx/forms';
import { IPermission } from '@mdtx/common';
import { PermissionService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-permission',
  standalone: true,
  imports: [CommonModule, PermissionFormComponent],
  templateUrl: './create-permission.component.html',
  styleUrl: './create-permission.component.scss',
  providers: [PermissionService],
})
export class CreatePermissionComponent {
  constructor(protected readonly service: PermissionService) {}
  handleSubmit(permission: IPermission) {
    this.service.add(permission);
  }
}
