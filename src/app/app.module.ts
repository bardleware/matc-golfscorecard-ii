import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { GolfService } from './services/golf.service';


import { MainComponent } from './app.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [
    GolfService
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }
