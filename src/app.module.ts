import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import axios from '../../node_modules/axios';
import { ServerAPI } from 'src/app/service.api';
import { FormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServerAPI],
  bootstrap: [AppComponent]
})
export class AppModule { }
