import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaintananceComponent } from './maintanance/maintanance.component';
import { ConstructionComponent } from './construction/construction.component';
import { HomeComponent } from './home/home.component';
import { PhotographyComponent } from './photography/photography.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { PhotographyNavComponent } from './photography-nav/photography-nav.component';
import { AboutmeComponent } from './photography/sites/aboutme/aboutme.component';
import { WorkComponent } from './photography/sites/work/work.component';
import { ContactComponent } from './photography/sites/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PhotographyAboutComponent } from './photography-about/photography-about.component';
import { PhotographyFilterComponent } from './photography-filter/photography-filter.component';
import { PhotographyGalleryComponent } from './photography-gallery/photography-gallery.component';

@NgModule({
  declarations: [						
    AppComponent,
      MaintananceComponent,
      ConstructionComponent,
      HomeComponent,
      PhotographyComponent,
      MainNavComponent,
      PhotographyNavComponent,
      AboutmeComponent,
      WorkComponent,
      ContactComponent,
      FooterComponent,
      PhotographyAboutComponent,
      PhotographyFilterComponent,
      PhotographyGalleryComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
