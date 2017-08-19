import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ButtonModule} from "primeng/components/button/button";
import {AutoCompleteComponentDemoComponent} from "./component/auto-complete-component-demo/auto-complete-component-demo.component";
import {AutoCompleteModule} from "primeng/components/autocomplete/autocomplete";
import {CalendarModule} from "primeng/components/calendar/calendar";
import {CalendarDemoComponent} from "./component/calendar-demo/calendar-demo.component";

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponentDemoComponent,
    CalendarDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    AutoCompleteModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
