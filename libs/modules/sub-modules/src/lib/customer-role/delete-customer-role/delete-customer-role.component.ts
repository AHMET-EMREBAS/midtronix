import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MatDialogClose,
  MatDialogModule,
} from '@angular/material/dialog';
import { ICustomerRole } from '@mdtx/common';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CustomerRoleService } from '@mdtx/ngrx';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'mdtx-delete-customer-role',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './delete-customer-role.component.html',
  styleUrl: './delete-customer-role.component.scss',
  providers: [CustomerRoleService],
})
export class DeleteCustomerRoleComponent {
  deletedItems: number[] = [];

  constructor(
    protected readonly service: CustomerRoleService,
    @Inject(DIALOG_DATA) public readonly items: ICustomerRole[]
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

  value(item: ICustomerRole) {
    return Object.values(item).join(', ');
  }
}
