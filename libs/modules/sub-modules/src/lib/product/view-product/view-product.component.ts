import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from '@mdtx/tables';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'mdtx-view-product',
  standalone: true,
  imports: [CommonModule, ProductTableComponent, MatDialogModule],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.scss',
})
export class ViewProductComponent {}
