import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructionComponent } from './construction/construction.component';
import { HomeComponent } from './home/home.component';
import { MaintananceComponent } from './maintanance/maintanance.component';
import { PhotographyComponent } from './photography/photography.component';

const routes: Routes = [
  {
    path: '',
    component: ConstructionComponent
  },
  {
    path: 'construction',
    component: ConstructionComponent
  },
  {
    path: 'photography',
    component: PhotographyComponent
  },
  {
    path: 'maintanance',
    component: MaintananceComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
