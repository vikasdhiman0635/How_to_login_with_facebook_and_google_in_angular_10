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
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '976573038155-8fmjdaidg3gf7pb4vg3u2n3f8tbofv4e.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('299821457997851'),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
