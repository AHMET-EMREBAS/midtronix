import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceFormComponent } from '@mdtx/forms';
import { IPrice } from '@mdtx/common';
import { PriceService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-price',
  standalone: true,
  imports: [CommonModule, PriceFormComponent],
  templateUrl: './create-price.component.html',
  styleUrl: './create-price.component.scss',
  providers: [PriceService],
})
export class CreatePriceComponent {
  constructor(protected readonly service: PriceService) {}
  handleSubmit(price: IPrice) {
    this.service.add(price);
  }
}
