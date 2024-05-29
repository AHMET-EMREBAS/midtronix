import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseFormComponent } from '@mdtx/forms';
import { IPurchase } from '@mdtx/common';
import { PurchaseService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-purchase',
  standalone: true,
  imports: [CommonModule, PurchaseFormComponent],
  templateUrl: './create-purchase.component.html',
  styleUrl: './create-purchase.component.scss',
  providers: [PurchaseService],
})
export class CreatePurchaseComponent {
  constructor(protected readonly service: PurchaseService) {}
  handleSubmit(purchase: IPurchase) {
    this.service.add(purchase);
  }
}
