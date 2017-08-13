import { Component,OnInit } from '@angular/core';
import { driverData } from './driverData';
import { driverDataService } from './driverData.service';

@Component({
  providers: [driverDataService],
  selector: 'raceData-Selector',
  templateUrl: './raceData.component.html',
  styleUrls: ['./raceData.component.css']
})

export class raceDataComponent implements OnInit {
  
  raceData: driverData[];
  
  constructor(private data: driverDataService) { };

  getraceData(): void {
    this.data.getdriverData().then(raceData => this.raceData = raceData);
  }

  ngOnInit(): void {
    this.getraceData();
  }

}



      
