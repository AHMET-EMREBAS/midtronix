import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mdtx-product',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  template: `<mat-toolbar>
      <button mat-icon-button color="primary" [routerLink]="['create']">
        <mat-icon>add</mat-icon>
      </button>
      <button mat-icon-button color="primary" [routerLink]="['view']">
        <mat-icon>toc</mat-icon>
      </button>
    </mat-toolbar>

    <router-outlet></router-outlet>`,
})
export class ProductComponent {}
