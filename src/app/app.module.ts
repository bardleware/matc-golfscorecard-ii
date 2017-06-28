import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {provideStore} from '@ngrx/store';
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
  bootstrap: [
    MainComponent,
    provideStore({})//put reducers in here.
    ]
})
export class AppModule { }
