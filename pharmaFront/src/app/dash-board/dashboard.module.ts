import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashBoardComponent } from './dash-board.component';
import { DashboardRoutingModule } from './dashboard.routing';




@NgModule({
  declarations: [
    DashBoardComponent
  ],
  imports: [
    DashboardRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class DashboardModule { }
