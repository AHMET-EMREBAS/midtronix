import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NavlistItem } from '@mdtx/material/core';
import { SidebarComponent } from '@mdtx/material/toolbar';

@Component({
  imports: [RouterModule, SidebarComponent],
  standalone: true,
  template: ` <router-outlet></router-outlet> `,

  styles: [],
})
export class ProductComponent {
  topToolbarItems: Pick<
    NavlistItem,
    'icon' | 'label' | 'route' | 'divider' | 'isActive'
  >[] = [
    {
      icon: 'add',
      label: 'Create Product',
      route: 'create',
    },
    {
      divider: true,
    },
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
      isActive: true,
    },
    {
      icon: 'table',
      label: 'View Products',
      route: 'view',
    },
  ];
  bottomToolbarItems: Pick<
    NavlistItem,
    'icon' | 'label' | 'route' | 'divider' | 'isActive'
  >[] = [];

  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute
  ) {}

  markAsActive(item: NavlistItem) {
    this.topToolbarItems.forEach((e) => (e.isActive = false));
    this.bottomToolbarItems.forEach((e) => (e.isActive = false));
    item.isActive = true;
  }
  handleClick(event: NavlistItem) {
    this.markAsActive(event);
    this.router.navigate([event.route], { relativeTo: this.route });
  }
}
