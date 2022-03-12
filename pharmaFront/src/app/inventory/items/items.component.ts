import { Component, OnInit } from '@angular/core';
import { AppService } from './items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  optionsWithFeatures: any
  dataWithFeatures: any
  columnsWithFeatures: any

  constructor(
    private appService: AppService

  ) { }

  ngOnInit(): void {

    
}
}

