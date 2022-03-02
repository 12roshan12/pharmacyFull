import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SharedComponent } from './shared/shared.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    SharedComponent,
    DashBoardComponent,
    OrdersComponent,
    ProfilesComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
