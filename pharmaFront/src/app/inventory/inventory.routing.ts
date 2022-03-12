import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { InventoryComponent } from './inventory.component';
import { ItemsComponent } from './items/items.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';

const routes: Routes = [
  {
    path: "", component: IndexComponent
  },
  {
    path: "purchase", component: PurchaseOrderComponent
  },
  {
    path: "sales", component: SalesOrderComponent
  },
  {
    path: "items", component: ItemsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
