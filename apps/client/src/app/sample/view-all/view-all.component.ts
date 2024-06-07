import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleMetadata } from '@mdtx/models';
import {
  AdvanceTableComponent,
  provideAdvanceTableMetadata,
  provideAdvanceTableCollectionService,
} from '@mdtx/material/table';
import { SampleService } from '../sample.service';

@Component({
  selector: 'mdtx-view-all',
  standalone: true,
  imports: [CommonModule, AdvanceTableComponent],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.scss',
  providers: [
    provideAdvanceTableMetadata(new SampleMetadata()),
    provideAdvanceTableCollectionService(SampleService),
  ],
})
export class ViewAllComponent {}
