import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HighlightDirective} from "./directive/highlight.directive";
import {HeavyLoaderComponent} from "./component/heavy-loader.component";
import {UnlessDirective} from "./directive/unless.directive";
import {BeautifulBackgroundDirective} from "./directive/beautifulBackground.directive";
import {BeautifulBackground2Directive} from "./directive/beautifulBackground2.directive";

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HeavyLoaderComponent,
    UnlessDirective,
    BeautifulBackground2Directive,
    BeautifulBackgroundDirective

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
