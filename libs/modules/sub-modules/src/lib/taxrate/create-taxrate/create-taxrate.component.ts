import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxrateFormComponent } from '@mdtx/forms';
import { ITaxrate } from '@mdtx/common';
import { TaxrateService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-taxrate',
  standalone: true,
  imports: [CommonModule, TaxrateFormComponent],
  templateUrl: './create-taxrate.component.html',
  styleUrl: './create-taxrate.component.scss',
  providers: [TaxrateService],
})
export class CreateTaxrateComponent {
  constructor(protected readonly service: TaxrateService) {}
  handleSubmit(taxrate: ITaxrate) {
    this.service.add(taxrate);
  }
}
