import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PaginationModule, DatepickerModule} from "ng2-bootstrap";
import {PageDemoComponent} from "./page/page-demo.component";
import {DatePickerDemoComponent} from "./date-picker/date-picker-demo.component";

@NgModule({
  declarations: [
    AppComponent,
    PageDemoComponent,
    DatePickerDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PaginationModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
