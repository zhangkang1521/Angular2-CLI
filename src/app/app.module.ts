import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {UserComponent} from "./user.component";
import {ContentDemoComponent} from "./content-demo.component";
import {ChangeDetectorDemoComponent} from "./change-detector-demo";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ContentDemoComponent,
    ChangeDetectorDemoComponent
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
