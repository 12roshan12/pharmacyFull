import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor( private authService:AuthService,private route:Router) {

    if(sessionStorage.getItem("user") )
    {
      this.route.navigateByUrl("/dashboard")
    }

    }

  ngOnInit(): void {
  }

  signinFrom = new FormGroup({
    
    username: new FormControl('',Validators.required),    
    password: new FormControl('',Validators.required),
  })


  signin(){
    this.authService.signin(this.signinFrom.value).subscribe((e:any) =>{
      
      var message = e['data']

      if(message=='success'){
        sessionStorage.setItem("user","true")
        this.route.navigateByUrl('/dashboard')
      }
      
    })
  }

}
