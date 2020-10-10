import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SocialLoginModule, SocialAuthServiceConfig } from'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from "./demo/demo.component";
import { NevbarComponent } from './nevbar/nevbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NevbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
})
export class AppModule {}
