import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {FormDemoComponent} from "./form.component";
import {FormGroupDemoComponent} from "./form-group-demo.component";

@NgModule({
  declarations: [
    AppComponent,
    FormDemoComponent,
    FormGroupDemoComponent
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
