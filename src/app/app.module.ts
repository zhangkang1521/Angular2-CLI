import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DemoInputComponent} from "./demo-input.component";
import {SwitchMapDemoComponent} from "./component/switchmap-demo.component";

@NgModule({
  declarations: [
    AppComponent,
    DemoInputComponent,
    SwitchMapDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
