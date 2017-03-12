import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {HeroModule} from "./component/heroes/heroes.module";
import {CrisisCenterModule} from "./component/cirsis-center/crisis-center.module";
import {ComposeMessageComponent} from "./component/compose-message/compose-message.component";
import {AdminModule} from "./component/admin/admin-module";



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroModule,
    CrisisCenterModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
