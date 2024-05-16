import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentFormComponent } from '@mdtx/forms';
import { IDepartment } from '@mdtx/common';
import { DepartmentService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-department',
  standalone: true,
  imports: [CommonModule, DepartmentFormComponent],
  templateUrl: './create-department.component.html',
  styleUrl: './create-department.component.scss',
  providers: [DepartmentService],
})
export class CreateDepartmentComponent {
  constructor(protected readonly service: DepartmentService) {}
  handleSubmit(department: IDepartment) {
    this.service.add(department);
  }
}
