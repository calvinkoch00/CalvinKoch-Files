import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaintananceComponent } from './maintanance/maintanance.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [						
    AppComponent,
      MaintananceComponent,
      TestComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
