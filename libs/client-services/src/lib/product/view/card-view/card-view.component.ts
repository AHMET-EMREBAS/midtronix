import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ProductForm } from '../../../managers';
import { ProductService } from '../../product.service';
import { CommonFormModule } from '@mdtx/material/form';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'mdtx-card-view',
  standalone: true,
  imports: [
    CommonFormModule,
    MatToolbarModule,
    MatPaginatorModule,
    RouterModule,
    MatCardModule,
  ],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.scss',
  providers: [ProductService],
})
export class CardViewComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  readonly columns = ProductForm.columns();

  displayedColumns = ProductForm.displayedColumns();

  constructor(protected readonly service: ProductService) {}

  ngAfterViewInit(): void {
    this.service.getWithQuery({
      take: this.paginator.pageSize,
      skip: this.paginator.pageIndex * this.paginator.pageSize,
    });
  }
}
