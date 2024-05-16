import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { IMessage } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteMessageComponent } from '../delete-message/delete-message.component';

@Component({
  selector: 'mdtx-view-message',
  standalone: true,
  imports: [CommonModule, MessageTableComponent, MatDialogModule],
  templateUrl: './view-message.component.html',
  styleUrl: './view-message.component.scss',
})
export class ViewMessageComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: IMessage[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteMessageComponent, { data: [...items] });
  }
}
