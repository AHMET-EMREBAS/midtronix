import { Routes } from '@angular/router';
import { AdvanceTableComponent } from '@mdtx/material/table';
import { EditorComponent } from '@mdtx/material/form';

export const ClientResourceRoutes: Routes = [
  {
    path: 'view',
    loadComponent() {
      return AdvanceTableComponent;
    },
  },
  {
    path: 'editor',
    loadComponent() {
      return EditorComponent;
    },
  },
  {
    path: 'editor/:id',
    loadComponent() {
      return EditorComponent;
    },
  },
];