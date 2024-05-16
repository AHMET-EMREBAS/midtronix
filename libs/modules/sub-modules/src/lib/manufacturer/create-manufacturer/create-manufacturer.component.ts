import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufacturerFormComponent } from '@mdtx/forms';
import { IManufacturer } from '@mdtx/common';
import { ManufacturerService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-manufacturer',
  standalone: true,
  imports: [CommonModule, ManufacturerFormComponent],
  templateUrl: './create-manufacturer.component.html',
  styleUrl: './create-manufacturer.component.scss',
  providers: [ManufacturerService],
})
export class CreateManufacturerComponent {
  constructor(protected readonly service: ManufacturerService) {}
  handleSubmit(manufacturer: IManufacturer) {
    this.service.add(manufacturer);
  }
}
