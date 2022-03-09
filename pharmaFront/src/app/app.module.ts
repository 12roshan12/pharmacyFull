import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import "@angular/compiler"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfilesComponent } from './profiles/profiles.component';

import { AuthenticationModule } from './authentication/authentication.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,    
    SharedComponent,
    OrdersComponent,
    ProfilesComponent,
    
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    AuthenticationModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
