import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CategoryService,
  PermissionService,
  PriceLevelService,
  RoleService,
  SupplierService,
} from '@mdtx/resource-clients';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'mdtx-root',
  template: `<router-outlet></router-outlet>`,
  styleUrl: './app.component.scss',
  providers: [
    CategoryService,
    SupplierService,
    PriceLevelService,
    PermissionService,
    RoleService,
  ],
})
export class AppComponent implements OnInit {
  constructor(
    protected readonly categoryService: CategoryService,
    protected readonly supplierService: SupplierService,
    protected readonly priceLevelService: PriceLevelService,
    protected readonly permissionService: PermissionService,
    protected readonly roleService: RoleService
  ) {}

  async ngOnInit() {
    this.categoryService.saveAllToLocalStore();
    this.supplierService.saveAllToLocalStore();
    this.priceLevelService.saveAllToLocalStore();
    this.permissionService.saveAllToLocalStore();
    this.roleService.saveAllToLocalStore();
  }
}
