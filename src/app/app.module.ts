import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyWebsitesComponent } from './my-websites/my-websites.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    AboutMeComponent,
    MyWebsitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
