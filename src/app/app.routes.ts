import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((m) => m.Login),
    title: 'Login',
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard').then((m) => m.Dashboard),
    title: 'Dashboard',
  },
  {
    path: 'user',
    loadComponent: () => import('./user/user').then((m) => m.User),
    title: 'User',
  },
  {
    path: 'add-user',
    loadComponent: () => import('./user/add-user/add-user').then((m) => m.AddUser),
    title: 'Add User',
  },
  {
    path: 'shiftentry',
    loadComponent: () => import('./shiftentry/shiftentry').then((m) => m.Shiftentry),
    title: 'Shift Entry',
  },
  {
    path: 'add-shift',
    loadComponent: () => import('./shiftentry/add-shift/add-shift').then((m) => m.AddShift),
    title: 'Add Shift',
  },
  {
    path: 'department',
    loadComponent: () => import('./master/department/department').then((m) => m.Department),
    title: 'Department',
  },
  {
    path: 'product-status',
    loadComponent: () => import('./product-status/product-status').then((m) => m.ProductStatus),
    title: 'Product Status',
  },
  {
    path: 'report',
    loadComponent: () => import('./report/report').then((m) => m.Report),
    title: 'Report',
  },
];
