import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { IRole } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteRoleComponent } from '../delete-role/delete-role.component';

@Component({
  selector: 'mdtx-view-role',
  standalone: true,
  imports: [CommonModule, RoleTableComponent, MatDialogModule],
  templateUrl: './view-role.component.html',
  styleUrl: './view-role.component.scss',
})
export class ViewRoleComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: IRole[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteRoleComponent, { data: [...items] });
  }
}
