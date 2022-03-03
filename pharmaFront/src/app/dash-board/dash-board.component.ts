import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private route:Router) { }

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
