import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnboardComponent } from './onboard/onboard.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';

// router van en los imports
import { APP_ROUTES } from './route';
import { ServiceModule } from './services/service.module';

@NgModule({
  declarations: [
     AppComponent,
     LoginComponent,
     OnboardComponent,
     PagesComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    APP_ROUTES,
    SharedModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
