import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { PlanningpokerComponent } from './planningpoker/planningpoker.component'

const routes : Routes = [
    { path: '', component: HomeComponent },
    { path: 'planning-poker', component: PlanningpokerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
