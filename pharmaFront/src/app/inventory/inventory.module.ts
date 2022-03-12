
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { InventoryComponent } from './inventory.component';

import {  InventoryRoutingModule } from './inventory.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { IndexComponent } from './index/index.component';





@NgModule({
  declarations: [
    InventoryComponent,
    DashboardComponent,
    SalesOrderComponent,
    PurchaseOrderComponent,
    IndexComponent
    
  ],
  imports: [
    InventoryRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
    
  ],
  providers: [],
  bootstrap: []
})
export class InventoryModule { }
