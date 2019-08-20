import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { LogInPageComponent } from './components/log-in-page/log-in-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignUpPageComponent,
    LogInPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
