/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
import {
  AppLayoutComponent,
  SidenavLeftBottomProvider,
  SidenavLeftTopProvider,
  StatusbarRightProvider,
  ToolbarRightProvider,
} from '@mdtx/material/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { HelpComponent } from './help/help.component';
import { SettingsComponent } from './settings/settings.component';

export const CmsRoutes: Routes = [
  {
    title: 'Customer Management',
    path: '',
    loadComponent: () => AppLayoutComponent,
    providers: [
      SidenavLeftTopProvider.provide([
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { label: 'Report', route: 'report', icon: 'report' },
      ]),
      ToolbarRightProvider.provide([]),

      StatusbarRightProvider.provide([
        { label: 'Help', route: 'help', icon: 'help' },
      ]),

      SidenavLeftBottomProvider.provide([
        { label: 'Apps', route: '/', icon: 'apps', color: 'accent' },
      ]),
    ],
    children: [
      { path: 'dashboard', loadComponent: () => DashboardComponent },
      { path: 'report', loadComponent: () => ReportComponent },
      { path: 'help', loadComponent: () => HelpComponent },
      { path: 'settings', loadComponent: () => SettingsComponent },
    ],
  },
];
