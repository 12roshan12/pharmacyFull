
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { InventoryComponent } from './inventory.component';

import {  InventoryRoutingModule } from './inventory.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { IndexComponent } from './index/index.component';
import { NgxEchartsModule } from 'ngx-echarts';

import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';





@NgModule({
  declarations: [
    InventoryComponent,
    DashboardComponent,
    SalesOrderComponent,
    PurchaseOrderComponent,
    IndexComponent,
    ItemsComponent
    
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
   
    
  ],
  providers: [],
  bootstrap: []
})
export class InventoryModule { }
