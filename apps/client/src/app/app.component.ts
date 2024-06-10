import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CategoryService,
  PriceLevelService,
  SupplierService,
} from '@mdtx/resource-clients';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'mdtx-root',
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.scss',
  providers: [CategoryService, SupplierService, PriceLevelService],
})
export class AppComponent implements OnInit {
  constructor(
    protected readonly categoryService: CategoryService,
    protected readonly supplierService: SupplierService,
    protected readonly priceLevelService: PriceLevelService
  ) {}

  async ngOnInit() {
    this.categoryService.saveAllToLocalStore();
    this.supplierService.saveAllToLocalStore();
    this.priceLevelService.saveAllToLocalStore();
  }
}
