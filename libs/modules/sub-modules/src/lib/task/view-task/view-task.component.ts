import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { ITask } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteTaskComponent } from '../delete-task/delete-task.component';

@Component({
  selector: 'mdtx-view-task',
  standalone: true,
  imports: [CommonModule, TaskTableComponent, MatDialogModule],
  templateUrl: './view-task.component.html',
  styleUrl: './view-task.component.scss',
})
export class ViewTaskComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: ITask[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteTaskComponent, { data: [...items] });
  }
}
