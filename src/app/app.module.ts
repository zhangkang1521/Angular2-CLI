import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {HeroListComponent} from "./hero/hero-list.component";
import {HeroService} from "./hero/hero.service";
import {AppRoutingModule} from "./app-routing.module";
import {HeroFormComponent} from "./hero/hero-form.component";
import {WikiComponent} from "./wiki/wiki.component";
import {WikiSmartComponent} from "./wiki/wiki-smart.component";
import {requestOptionsProvider} from "./default-request-option.service";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {HeroData} from "./hero/hero-data";

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroFormComponent,
    WikiComponent,
    WikiSmartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(HeroData)
  ],
  providers: [
    HeroService,
    requestOptionsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
