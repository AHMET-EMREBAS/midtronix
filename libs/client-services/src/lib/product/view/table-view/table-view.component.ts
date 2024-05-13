import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ProductForm } from '../../../managers';
import { ProductService } from '../../product.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonFormModule } from '@mdtx/material/form';
import { TableComponent as MaterialTableComponent } from '@mdtx/material/table';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mdtx-table-view',
  standalone: true,
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss',
  imports: [
    CommonFormModule,
    MatToolbarModule,
    MaterialTableComponent,
    MatPaginatorModule,
    RouterModule,
  ],
  providers: [ProductService],
})
export class TableViewComponent implements AfterViewInit {
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
