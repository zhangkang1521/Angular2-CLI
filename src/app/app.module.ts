import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {FormDemoComponent} from "./form-demo.component";
import {FormGroupDemoComponent} from "./form-group-demo.component";
import {ValidateFormDemoComponent} from "./validate-form.component";
import {PipeDemoComponent} from "./pipe-demo.component";
import {TwoWayBindingComponent} from "./two-way-binding.component";

@NgModule({
  declarations: [
    AppComponent,
    FormDemoComponent,
    FormGroupDemoComponent,
    ValidateFormDemoComponent,
    PipeDemoComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
