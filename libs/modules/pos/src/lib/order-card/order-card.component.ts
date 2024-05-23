import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IOrderViewRaw } from '@mdtx/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InputQuantityComponent } from '@mdtx/material/form';
import { CloseButtonComponent } from '@mdtx/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OrderEditorComponent } from '../order-editor/order-editor.component';
@Component({
  selector: 'mdtx-order-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    InputQuantityComponent,
    CloseButtonComponent,
    MatDialogModule,
  ],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.scss',
})
export class OrderCardComponent {
  @Input() orderView!: IOrderViewRaw;
  @Output() quantityEvent = new EventEmitter<-1 | 1>();
  @Output() deleteEvent = new EventEmitter();
  @Output() udpateEvent = new EventEmitter();

  constructor(protected readonly dialog: MatDialog) {}

  editOrder() {
    const openedDialog = this.dialog.open(OrderEditorComponent, {
      data: this.orderView,
    });
    openedDialog.afterClosed().subscribe((result) => {
      this.udpateEvent.emit();
    });
  }
}
