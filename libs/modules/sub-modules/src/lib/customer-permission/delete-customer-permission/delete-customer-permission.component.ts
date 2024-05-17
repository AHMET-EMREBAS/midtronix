import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MatDialogClose,
  MatDialogModule,
} from '@angular/material/dialog';
import { ICustomerPermission } from '@mdtx/common';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomerPermissionService } from '@mdtx/ngrx';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'mdtx-delete-customer-permission',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './delete-customer-permission.component.html',
  styleUrl: './delete-customer-permission.component.scss',
  providers: [CustomerPermissionService],
})
export class DeleteCustomerPermissionComponent {
  deletedItems: number[] = [];

  constructor(
    protected readonly service: CustomerPermissionService,
    @Inject(DIALOG_DATA) public readonly items: ICustomerPermission[]
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

  value(item: ICustomerPermission) {
    return Object.values(item).join(', ');
  }
}
