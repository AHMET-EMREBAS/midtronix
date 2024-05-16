import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { IDepartment } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteDepartmentComponent } from '../delete-department/delete-department.component';

@Component({
  selector: 'mdtx-view-department',
  standalone: true,
  imports: [CommonModule, DepartmentTableComponent, MatDialogModule],
  templateUrl: './view-department.component.html',
  styleUrl: './view-department.component.scss',
})
export class ViewDepartmentComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: IDepartment[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteDepartmentComponent, { data: [...items] });
  }
}
