import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuantityFormComponent } from '@mdtx/forms';
import { IQuantity } from '@mdtx/common';
import { QuantityService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-quantity',
  standalone: true,
  imports: [CommonModule, QuantityFormComponent],
  templateUrl: './create-quantity.component.html',
  styleUrl: './create-quantity.component.scss',
  providers: [QuantityService],
})
export class CreateQuantityComponent {
  constructor(protected readonly service: QuantityService) {}
  handleSubmit(quantity: IQuantity) {
    this.service.add(quantity);
  }
}
