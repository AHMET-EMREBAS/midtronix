import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceLevelFormComponent } from '@mdtx/forms';
import { IPriceLevel } from '@mdtx/common';
import { PriceLevelService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-price-level',
  standalone: true,
  imports: [CommonModule, PriceLevelFormComponent],
  templateUrl: './create-price-level.component.html',
  styleUrl: './create-price-level.component.scss',
  providers: [PriceLevelService],
})
export class CreatePriceLevelComponent {
  constructor(protected readonly service: PriceLevelService) {}
  handleSubmit(priceLevel: IPriceLevel) {
    this.service.add(priceLevel);
  }
}
