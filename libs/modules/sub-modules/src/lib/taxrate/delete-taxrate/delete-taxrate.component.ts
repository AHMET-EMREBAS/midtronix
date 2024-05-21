import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MatDialogClose,
  MatDialogModule,
} from '@angular/material/dialog';
import { ITaxrate } from '@mdtx/common';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TaxrateService } from '@mdtx/ngrx';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'mdtx-delete-taxrate',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './delete-taxrate.component.html',
  styleUrl: './delete-taxrate.component.scss',
  providers: [TaxrateService],
})
export class DeleteTaxrateComponent {
  deletedItems: number[] = [];

  constructor(
    protected readonly service: TaxrateService,
    @Inject(DIALOG_DATA) public readonly items: ITaxrate[]
  ) {}

  deleteItem(id: number) {
    this.deletedItems.push(id);
    this.service.delete(id);
  }

  deleteAll() {
    this.items.forEach((e) => {
      if (!this.deletedItems.includes(e.id)) {
        this.service.delete(e.id);
      }
    });
  }

  value(item: ITaxrate) {
    return Object.values(item).join(', ');
  }
}
