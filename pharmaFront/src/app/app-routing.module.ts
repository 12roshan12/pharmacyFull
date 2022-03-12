import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './inventory/dashboard/dashboard.component';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',

  // },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dash-board/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'inventory',
    component:DashboardComponent,
    loadChildren: () =>
      import('./inventory/inventory.module').then(
        (m) => m.InventoryModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
