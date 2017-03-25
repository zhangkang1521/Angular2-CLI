import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PaginationModule, DatepickerModule, ModalModule} from "ng2-bootstrap";
import {PageDemoComponent} from "./page/page-demo.component";
import {DatePickerDemoComponent} from "./date-picker/date-picker-demo.component";
import {StaticModalDemoComponent} from "./modal/static-modal-demo.component";
import {ChildModalDemoComponent} from "./modal/child-modal-demo.component";

@NgModule({
  declarations: [
    AppComponent,
    PageDemoComponent,
    DatePickerDemoComponent,
    StaticModalDemoComponent,
    ChildModalDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PaginationModule.forRoot(),
    DatepickerModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
