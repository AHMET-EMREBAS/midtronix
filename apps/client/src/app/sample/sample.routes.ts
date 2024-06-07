import { Routes } from '@angular/router';
import { ViewAllComponent } from './view-all/view-all.component';
import { ViewOneComponent } from './view-one/view-one.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { SampleMetadata } from '@mdtx/models';

export const SampleRoutes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full',
  },
  {
    path: 'view',
    loadComponent() {
      return ViewAllComponent;
    },
  },
  {
    path: 'view/:id',

    loadComponent() {
      return ViewOneComponent;
    },
  },

  {
    path: 'editor',
    loadComponent() {
      return CreateComponent;
    },
  },
  {
    path: 'editor/:id',
    loadComponent() {
      return UpdateComponent;
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
