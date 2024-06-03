import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { UpdateTemplateComponent } from './update-template/update-template.component';
import { DeleteTemplateComponent } from './delete-template/delete-template.component';
import { TemplateService } from './template.service';
import {
  AdvanceTableComponent,
  provideAdvanceTableDataService,
  provideAdvanceTableOptions,
} from '@mdtx/material/table';
import { ITemplateView, TemplateOptions } from '@mdtx/interface';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: '', loadComponent: () => AdvanceTableComponent },
      { path: 'create', loadComponent: () => CreateTemplateComponent },
      { path: 'update/:id', loadComponent: () => UpdateTemplateComponent },
      { path: 'delete/:id', loadComponent: () => DeleteTemplateComponent },
    ]),
    CommonModule,
  ],
  providers: [
    TemplateService,
    provideAdvanceTableDataService(TemplateService),
    provideAdvanceTableOptions<ITemplateView>(TemplateOptions),
  ],
})
export class TemplateModule {}
