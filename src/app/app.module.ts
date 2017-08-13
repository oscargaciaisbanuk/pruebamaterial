import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { raceDataComponent } from './raceData.component';
import { MdMenuModule, MdToolbarModule, MdIconModule, MdButtonModule } from '@angular/material';
import { HttpModule }    from '@angular/http';
import { driverDataService } from './driverData.service';

@NgModule({
  declarations: [
    AppComponent,
    raceDataComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    HttpModule
  ],
  providers: [driverDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
