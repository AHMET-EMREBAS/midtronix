import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { ICart } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteCartComponent } from '../delete-cart/delete-cart.component';

@Component({
  selector: 'mdtx-view-cart',
  standalone: true,
  imports: [CommonModule, CartTableComponent, MatDialogModule],
  templateUrl: './view-cart.component.html',
  styleUrl: './view-cart.component.scss',
})
export class ViewCartComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: ICart[]) {
    console.log(items, '<<< items to be deleted!');
    this.matDialog.open(DeleteCartComponent, { data: [...items] });
  }
}
