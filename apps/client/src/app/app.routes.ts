import { Route } from '@angular/router';

import { TemplateModule } from './template/template.module';

export const appRoutes: Route[] = [
  { path: '', loadChildren: () => TemplateModule },
  // { path: '', loadChildren: () => WebsiteRoutes },
];
