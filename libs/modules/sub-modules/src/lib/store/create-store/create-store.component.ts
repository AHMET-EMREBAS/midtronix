import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreFormComponent } from '@mdtx/forms';
import { IStore } from '@mdtx/common';
import { StoreService } from '@mdtx/ngrx';
@Component({
  selector: 'mdtx-create-store',
  standalone: true,
  imports: [CommonModule, StoreFormComponent],
  templateUrl: './create-store.component.html',
  styleUrl: './create-store.component.scss',
  providers: [StoreService],
})
export class CreateStoreComponent {
  constructor(protected readonly service: StoreService) {}
  handleSubmit(store: IStore) {
    this.service.add(store);
  }
}
