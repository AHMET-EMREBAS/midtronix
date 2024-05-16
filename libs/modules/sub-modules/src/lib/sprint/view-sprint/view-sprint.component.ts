import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SprintTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { ISprint } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteSprintComponent } from '../delete-sprint/delete-sprint.component';

@Component({
  selector: 'mdtx-view-sprint',
  standalone: true,
  imports: [CommonModule, SprintTableComponent, MatDialogModule],
  templateUrl: './view-sprint.component.html',
  styleUrl: './view-sprint.component.scss',
})
export class ViewSprintComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: ISprint[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteSprintComponent, { data: [...items] });
  }
}
