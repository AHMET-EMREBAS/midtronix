import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@mdtx/material/core';
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
    AuthService,
  ],
})
export class AppComponent implements OnInit {
  constructor(
    protected readonly categoryService: CategoryService,
    protected readonly supplierService: SupplierService,
    protected readonly priceLevelService: PriceLevelService,
    protected readonly permissionService: PermissionService,
    protected readonly roleService: RoleService,
    protected readonly authService: AuthService,
    protected readonly router: Router
  ) {}

  async ngOnInit() {
    this.categoryService.saveAllToLocalStore();
    this.supplierService.saveAllToLocalStore();
    this.priceLevelService.saveAllToLocalStore();
    this.permissionService.saveAllToLocalStore();
    this.roleService.saveAllToLocalStore();

    try {
      await this.authService.hasSession();
      this.router.navigate(['app']);
    } catch (err) {
      this.router.navigate(['auth', 'login']);
    }
  }
}
