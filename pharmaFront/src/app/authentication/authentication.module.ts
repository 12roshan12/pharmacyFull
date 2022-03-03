
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication.routing';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    AuthenticationComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
    
  ],
  providers: [],
  bootstrap: []
})
export class AuthenticationModule { }
