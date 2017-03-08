import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeroListComponent} from "./hero/hero-list.component";
import {HeroService} from "./hero/hero.service";
import {AppRoutingModule} from "./app-routing.module";
import {HeroFormComponent} from "./hero/hero-form.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
