import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from '@mdtx/common';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';

@Component({
  selector: 'mdtx-view-category',
  standalone: true,
  imports: [CommonModule, CategoryTableComponent, MatDialogModule],
  templateUrl: './view-category.component.html',
  styleUrl: './view-category.component.scss',
})
export class ViewCategoryComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute,
    protected readonly matDialog: MatDialog
  ) {}

  createItem() {
    this.router.navigate(['..', 'create'], { relativeTo: this.route });
  }

  deleteItems(items: ICategory[]) {
    this.matDialog.open(DeleteCategoryComponent, { data: [...items] });
  }

  editItem(item: ICategory) {
    this.router.navigate(['..', 'update', item.id], { relativeTo: this.route });
  }
}
