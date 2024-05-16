import { Component } from '@angular/core';
import { ModuleLayoutComponent } from '@mdtx/material/layout';

@Component({
  selector: 'mdtx-department',
  standalone: true,
  imports: [ModuleLayoutComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss',
})
export class DepartmentComponent {}
