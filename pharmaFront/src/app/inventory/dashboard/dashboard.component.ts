import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(

    private route:Router

  ) { }

  ngOnInit(): void {
  }

  
  checkUser(){

    

    if(sessionStorage.getItem("user")=="true" ){
      return true
    }
    else{
      return false
    }
  }

  logout(){
    sessionStorage.clear();
    this.route.navigateByUrl('/authentication')
  }

}
