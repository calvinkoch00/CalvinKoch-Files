import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaintananceComponent } from './maintanance/maintanance.component';
import { ConstructionComponent } from './construction/construction.component';
import { HomeComponent } from './home/home.component';
import { PhotographyComponent } from './photography/photography.component';

@NgModule({
  declarations: [						
    AppComponent,
      MaintananceComponent,
      ConstructionComponent,
      HomeComponent,
      PhotographyComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
