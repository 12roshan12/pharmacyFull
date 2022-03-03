import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private authService:AuthService) { }

  ngOnInit(): void {
  }


  signupFrom = new FormGroup({
    
    username: new FormControl('',Validators.required),    
    password: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
  })


  signup(){
    this.authService.signup(this.signupFrom.value).subscribe(e =>{
      console.log(e)
    })
  }

}
