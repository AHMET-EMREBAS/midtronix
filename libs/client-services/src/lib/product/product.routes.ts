import { Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { ReportComponent } from './report/report.component';

export const ProductRoutes: Routes = [
  {
    path: '',
    loadComponent: () => ProductComponent,
    children: [
      { path: '', loadComponent: () => HomeComponent },
      { path: 'create', loadComponent: () => CreateComponent },
      { path: 'view', loadComponent: () => ViewComponent },
      { path: 'report', loadComponent: () => ReportComponent },
    ],
  },
];
