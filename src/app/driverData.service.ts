import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { driverData } from './driverData';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class driverDataService {

  private raceDataUrl = 'http://35.189.234.159:8080/api/WEC/2017/LE_MANS';  // URL to web api

  constructor(private http: Http) { }

  getdriverData(): Promise<driverData[]> {
      return this.http
                 .get(this.raceDataUrl)
                 .toPromise()
                 .then(response => response.json() as driverData[])
                 .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

