import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { InventoryComponent } from './inventory.component';

const routes: Routes = [
  {
    path: "", component: DashboardComponent
  },
  {
    path: "purchase", component: DashboardComponent
  },
  {
    path: "sales", component: DashboardComponent
  },
  {
    path: "index", component: IndexComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
