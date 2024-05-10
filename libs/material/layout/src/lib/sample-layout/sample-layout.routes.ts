import { Routes } from '@angular/router';
import { SampleLayoutComponent } from './sample-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const SampleLayoutRoutes: Routes = [
  {
    path: '',
    component: SampleLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => HomeComponent },
      { path: 'about', loadComponent: () => AboutComponent },
    ],
  },
];
