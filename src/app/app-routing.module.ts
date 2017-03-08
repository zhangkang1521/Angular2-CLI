import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroFormComponent} from "./hero/hero-form.component";
import {HeroListComponent} from "./hero/hero-list.component";

const routes: Routes = [
  { path: '', redirectTo: 'hero/list', pathMatch: 'full' },
  { path: 'hero/list',  component: HeroListComponent },
  { path: 'hero/add',  component: HeroFormComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
