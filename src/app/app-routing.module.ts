import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstructionComponent } from './construction/construction.component';
import { HomeComponent } from './home/home.component';
import { MaintananceComponent } from './maintanance/maintanance.component';
import { PhotographyComponent } from './photography/photography.component';
import { AboutmeComponent } from './photography/sites/aboutme/aboutme.component';
import { WorkComponent } from './photography/sites/work/work.component';
import { ContactComponent } from './photography/sites/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: PhotographyComponent,
  },
  {
    path: 'construction',
    component: ConstructionComponent,
  },
  {
    path: 'photography',
    component: PhotographyComponent,
  },
  {
    path: 'maintanance',
    component: MaintananceComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'aboutme',
    component: AboutmeComponent,
  },
  {
    path: 'work',
    component: WorkComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
