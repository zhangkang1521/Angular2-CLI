import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './component/crisis-list/crisis-list.component';
import { HeroListComponent } from './component/hero-list/hero-list.component';
import { HeroDetailComponent } from './component/hero-detail/hero-detail.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";



@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroListComponent,
    HeroDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
