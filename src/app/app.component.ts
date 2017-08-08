import { Component } from '@angular/core';
import { driverData } from './driverData';

const RACEDATA: driverData[] = [
    {
        "class": "LMP1",
        "manufacturer": "Porsche",
        "team": "Porsche Team",
        "driver": "Timo BERNHARD",
        "laps": 90,
        "min": 102.401,
        "avg": 108.53875555555555,
        "top20": 103.34744999999998
    },
    {
        "class": "LMP1",
        "manufacturer": "Porsche",
        "team": "Porsche Team",
        "driver": "Mark WEBBER",
        "laps": 51,
        "min": 103.623,
        "avg": 107.62274509803916,
        "top20": 104.16090000000001
    },
    {
        "class": "LMP1",
        "manufacturer": "Porsche",
        "team": "Porsche Team",
        "driver": "Brendon HARTLEY",
        "laps": 60,
        "min": 103.33,
        "avg": 107.20233333333331,
        "top20": 103.95399999999998
    },
    {
        "class": "LMP1",
        "manufacturer": "Porsche",
        "team": "Porsche Team",
        "driver": "Neel JANI",
        "laps": 91,
        "min": 102.756,
        "avg": 108.55853846153849,
        "top20": 103.7363
    },
    {
        "class": "LMP1",
        "manufacturer": "Porsche",
        "team": "Porsche Team",
        "driver": "Romain DUMAS",
        "laps": 62,
        "min": 104.121,
        "avg": 108.03580645161293,
        "top20": 104.67645000000002
    },
    {
        "class": "LMP1",
        "manufacturer": "Porsche",
        "team": "Porsche Team",
        "driver": "Marc LIEB",
        "laps": 45,
        "min": 103.9,
        "avg": 113.17293333333329,
        "top20": 104.57809999999999
    },
    {
        "class": "LMP1",
        "manufacturer": "Rebellion",
        "team": "Rebellion Racing",
        "driver": "Alexandre IMPERATORI",
        "laps": 91,
        "min": 107.387,
        "avg": 111.91269230769227,
        "top20": 108.01725000000002
    },
    {
        "class": "LMP1",
        "manufacturer": "Rebellion",
        "team": "Rebellion Racing",
        "driver": "Dominik KRAIHAMER",
        "laps": 52,
        "min": 107.968,
        "avg": 116.44836538461537,
        "top20": 108.60575000000001
    },
    {
        "class": "LMP1",
        "manufacturer": "Rebellion",
        "team": "Rebellion Racing",
        "driver": "Mathéo TUSCHER",
        "laps": 48,
        "min": 107.945,
        "avg": 113.29641666666664,
        "top20": 108.81980000000001
    },
    {
        "class": "LMP1",
        "manufacturer": "CLM",
        "team": "Bykolles Racing Team",
        "driver": "Pierre KAFFER",
        "laps": 63,
        "min": 108.975,
        "avg": 113.93060317460315,
        "top20": 109.90119999999999
    },
    {
        "class": "LMP1",
        "manufacturer": "CLM",
        "team": "Bykolles Racing Team",
        "driver": "Simon TRUMMER",
        "laps": 77,
        "min": 109.047,
        "avg": 115.76451948051948,
        "top20": 110.39689999999999
    }
    ];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  raceData = RACEDATA;

}



      
