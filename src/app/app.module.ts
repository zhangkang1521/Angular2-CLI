import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {UserComponent} from "./user.component";
import {ContentDemoComponent} from "./content-demo.component";
import {ChangeDetectorDemoComponent} from "./change-detector-demo";
import {DetectionStrategyComponent} from "./detection-strategy.component";
import {MyInputComponent} from "./my-input.component";
import {MyInput2Component} from "./my-input2.component";
import {AnimationDemoComponent} from "./animation-demo.component";
import {EncapsulationDemoComponent} from "./encapsulation-demo.component";
import {EncapsulationDemo2Component} from "./encapsulation-demo2.component";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ContentDemoComponent,
    ChangeDetectorDemoComponent,
    DetectionStrategyComponent,
    MyInputComponent,
    MyInput2Component,
    AnimationDemoComponent,
    EncapsulationDemoComponent,
    EncapsulationDemo2Component
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
