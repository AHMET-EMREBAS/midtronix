/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import {
  AppLayoutComponent,
  SidenavLeftBottomProvider,
  SidenavLeftTopProvider,
} from '@mdtx/material/layout';
import { provideEntityData, withEffects } from '@ngrx/data';
import { PmsComponent } from './pms.component';
import {
  ProjectRoutes,
  TaskRoutes,
  SprintRoutes,
} from '@mdtx/modules/sub-modules';

export const PmsRoutes: Routes = [
  {
    path: '',
    component: PmsComponent,
    providers: [
      provideEntityData(
        {
          pluralNames: {
            Project: 'Projects',
            Sprint: 'Sprints',
            Task: 'Tasks',
          },
          entityMetadata: {
            Project: {},
            Sprint: {},
            Task: {},
          },
        },
        withEffects()
      ),
    ],
    children: [
      {
        path: '',
        loadComponent: () => AppLayoutComponent,
        providers: [
          SidenavLeftTopProvider.provide([
            { label: 'Project', icon: 'tactic', route: 'project' },
            { label: 'Sprint', icon: 'group_work', route: 'sprint' },
            { label: 'Task', icon: 'task', route: 'task' },
          ]),

          SidenavLeftBottomProvider.provide([
            { label: 'Apps', route: '/', icon: 'apps', color: 'accent' },
          ]),
        ],

        children: [
          { path: 'project', loadChildren: () => ProjectRoutes },
          { path: 'sprint', loadChildren: () => SprintRoutes },
          { path: 'task', loadChildren: () => TaskRoutes },
        ],
      },
    ],
  },
];
