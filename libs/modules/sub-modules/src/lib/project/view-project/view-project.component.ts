import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteProjectComponent } from '../delete-project/delete-project.component';

@Component({
  selector: 'mdtx-view-project',
  standalone: true,
  imports: [CommonModule, ProjectTableComponent, MatDialogModule],
  templateUrl: './view-project.component.html',
  styleUrl: './view-project.component.scss',
})
export class ViewProjectComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: IProject[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteProjectComponent, { data: [...items] });
  }
}
