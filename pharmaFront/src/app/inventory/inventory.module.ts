
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { InventoryComponent } from './inventory.component';

import {  InventoryRoutingModule } from './inventory.routing';
import { DashboardComponent } from './dashboard/dashboard.component';





@NgModule({
  declarations: [
    InventoryComponent,
    DashboardComponent
    
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
