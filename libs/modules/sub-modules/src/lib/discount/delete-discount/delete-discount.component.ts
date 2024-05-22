import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MatDialogClose,
  MatDialogModule,
} from '@angular/material/dialog';
import { IDiscount } from '@mdtx/common';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DiscountService } from '@mdtx/ngrx';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'mdtx-delete-discount',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './delete-discount.component.html',
  styleUrl: './delete-discount.component.scss',
  providers: [DiscountService],
})
export class DeleteDiscountComponent {
  deletedItems: number[] = [];

  constructor(
    protected readonly service: DiscountService,
    @Inject(DIALOG_DATA) public readonly items: IDiscount[]
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

  value(item: IDiscount) {
    return Object.values(item).join(', ');
  }
}
