import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroFormComponent} from "./hero/hero-form.component";
import {HeroListComponent} from "./hero/hero-list.component";
import {WikiComponent} from "./wiki/wiki.component";
import {WikiSmartComponent} from "./wiki/wiki-smart.component";

const routes: Routes = [
  { path: '', redirectTo: 'hero/list', pathMatch: 'full' },
  { path: 'hero/list',  component: HeroListComponent },
  { path: 'hero/add',  component: HeroFormComponent },
  { path: 'hero/detail/:id',  component: HeroFormComponent },
  { path: 'wiki',  component: WikiComponent },
  { path: 'wiki-smart',  component: WikiSmartComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
