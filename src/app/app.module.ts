import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HighlightDirective} from "./directive/highlight.directive";
import {HeavyLoaderComponent} from "./component/heavy-loader.component";
import {UnlessDirective} from "./directive/unless.directive";

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    HeavyLoaderComponent,
    UnlessDirective
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
