import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeroDetailComponent} from "./hero-detail.component";
import {PowTransform} from "./pipe/powTransform";
import {FlyHeroPipe} from "./pipe/FlyHeroPipe";
import {HeroAsyncMessageComponent} from "./asyn-message.component";
import {FetchJsonPipe} from "./pipe/fetch-json.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    PowTransform,
    FlyHeroPipe,
    HeroAsyncMessageComponent,
    FetchJsonPipe
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
