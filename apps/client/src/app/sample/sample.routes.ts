import { Routes } from '@angular/router';
import { ViewAllComponent } from './view-all/view-all.component';
import { ViewOneComponent } from './view-one/view-one.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

export const SampleRoutes: Routes = [
  {
    path: '',
    loadComponent() {
      return ViewAllComponent;
    },
  },

  {
    path: ':id',

    loadComponent() {
      return ViewOneComponent;
    },
  },

  {
    path: 'create',
    loadComponent() {
      return CreateComponent;
    },
  },
  {
    path: 'update/:id',
    loadComponent() {
      return UpdateComponent;
    },
  },
];
