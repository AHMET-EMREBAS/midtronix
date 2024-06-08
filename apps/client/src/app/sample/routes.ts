import { Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { AdvanceTableComponent } from '@mdtx/material/table';

export const ClientResourceRoutes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full',
  },
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

// @Component({
//   selector: 'mdtx-view-all',
//   standalone: true,
//   imports: [CommonModule, AdvanceTableComponent],
//   templateUrl: './view-all.component.html',
//   styleUrl: './view-all.component.scss',

// })
// export class ViewAllComponent {}
