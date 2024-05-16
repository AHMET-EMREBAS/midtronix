import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { ITicket } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteTicketComponent } from '../delete-ticket/delete-ticket.component';

@Component({
  selector: 'mdtx-view-ticket',
  standalone: true,
  imports: [CommonModule, TicketTableComponent, MatDialogModule],
  templateUrl: './view-ticket.component.html',
  styleUrl: './view-ticket.component.scss',
})
export class ViewTicketComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: ITicket[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteTicketComponent, { data: [...items] });
  }
}
