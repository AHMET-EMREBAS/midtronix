import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from '@mdtx/tables';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'mdtx-view-products',
  standalone: true,
  imports: [CommonModule, ProductTableComponent],
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.scss',
})
export class ViewProductsComponent {
  constructor(
    protected readonly router: Router,
    protected readonly route: ActivatedRoute
  ) {}

  goToForm() {
    this.router.navigate(['..','create'], { relativeTo: this.route });
  }
}
