import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountFormComponent } from '@mdtx/forms';
import { IDiscount } from '@mdtx/common';
import { DiscountService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-discount',
  standalone: true,
  imports: [CommonModule, DiscountFormComponent],
  templateUrl: './create-discount.component.html',
  styleUrl: './create-discount.component.scss',
  providers: [DiscountService],
})
export class CreateDiscountComponent {
  constructor(protected readonly service: DiscountService) {}
  handleSubmit(discount: IDiscount) {
    this.service.add(discount);
  }
}
