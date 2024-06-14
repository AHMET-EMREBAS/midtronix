import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterEvent,
  RouterModule,
} from '@angular/router';
import { AuthService, RouteHistoryStore } from '@mdtx/material/core';
import {
  CategoryService,
  PermissionService,
  PriceLevelService,
  ProductService,
  RoleService,
  SkuService,
  SupplierService,
} from '@mdtx/resource-clients';
import { Subscription } from 'rxjs';

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
    ProductService,
    SkuService,
    AuthService,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  constructor(
    protected readonly productService: ProductService,
    protected readonly skuService: SkuService,
    protected readonly categoryService: CategoryService,
    protected readonly supplierService: SupplierService,
    protected readonly priceLevelService: PriceLevelService,
    protected readonly permissionService: PermissionService,
    protected readonly roleService: RoleService,
    protected readonly authService: AuthService,
    protected readonly router: Router
  ) {}

  async ngOnInit() {
    try {
      await this.authService.hasSession();
      this.productService.saveAllToLocalStore();
      this.skuService.saveAllToLocalStore();
      this.categoryService.saveAllToLocalStore();
      this.supplierService.saveAllToLocalStore();
      this.priceLevelService.saveAllToLocalStore();
      this.permissionService.saveAllToLocalStore();
      this.roleService.saveAllToLocalStore();

      const routeHistory = RouteHistoryStore.obj<string[]>() || ['app'];
      this.router.navigate(routeHistory);
    } catch (err) {
      this.router.navigate(['auth', 'login']);
    }

    this.sub = this.router.events.subscribe((events) => {
      if (events.type === 1) {
        RouteHistoryStore.set(
          JSON.stringify((events as NavigationEnd).url.split('/'))
        );
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
