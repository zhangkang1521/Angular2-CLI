import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './component/crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {HeroModule} from "./component/heroes/heroes.module";



@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
