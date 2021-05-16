import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacDetailsComponent } from './fac-details/fac-details.component';
import { CouDetailsComponent } from './cou-details/cou-details.component';
import { CWFDetailsComponent } from './cwfdetails/cwfdetails.component';
import { CWNFDetailsComponent } from './cwnfdetails/cwnfdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    FacDetailsComponent,
    CouDetailsComponent,
    CWFDetailsComponent,
    CWNFDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
