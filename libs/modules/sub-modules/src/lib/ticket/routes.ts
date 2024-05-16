import { Routes } from '@angular/router';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import {
  ContentCenterLeftProvider,
  ModuleLayoutComponent,
} from '@mdtx/material/layout';
import { HomeTicketComponent } from './home-ticket/home-ticket.component';
import { DashboardTicketComponent } from './dashboard-ticket/dashboard-ticket.component';
export const TicketRoutes: Routes = [
  {
    title: 'Ticket Management',
    path: '',
    loadComponent: () => ModuleLayoutComponent,
    providers: [
      ContentCenterLeftProvider.provide([
        { label: 'Home', route: 'home', icon: 'home' },
        { label: 'Dashboard', route: 'dashboard', icon: 'dashboard' },
        { divider: true },
        { label: 'Create Ticket', route: 'create', icon: 'add' },
        { label: 'View Tickets', route: 'view', icon: 'table' },
      ]),
    ],
    children: [
      {
        title: 'Ticket Dashboard',
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        title: 'Ticket Management',
        path: 'home',
        loadComponent: () => HomeTicketComponent,
      },
      {
        title: 'Ticket Dashboard',
        path: 'dashboard',
        loadComponent: () => DashboardTicketComponent,
      },
      {
        title: 'New Ticket',
        path: 'create',
        loadComponent: () => CreateTicketComponent,
      },
      {
        title: 'View Tickets',
        path: 'view',
        loadComponent: () => ViewTicketComponent,
      },
      {
        title: 'Update Ticket',
        path: 'update/:id',
        loadComponent: () => UpdateTicketComponent,
      },
    ],
  },
];
