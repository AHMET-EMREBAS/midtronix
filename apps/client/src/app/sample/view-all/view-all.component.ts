import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceTableComponent } from '@mdtx/material/table';

@Component({
  selector: 'mdtx-view-all',
  standalone: true,
  imports: [CommonModule, AdvanceTableComponent],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.scss',
})
export class ViewAllComponent {}
