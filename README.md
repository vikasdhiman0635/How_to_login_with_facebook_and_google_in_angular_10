# How_to_login_with_facebook_and_google_in_angular_10
ok, I am using angular 10 therefore how to login facebook and google in angular.

In this angular app please install different library

      npm i angularx-social-login
And change the content in app.module.ts

      ...................
      providers: 
      [
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: true,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider(
                  'Enter your client Id'
                ),
              },
              {
                id: FacebookLoginProvider.PROVIDER_ID,
                provider: new FacebookLoginProvider('Enter App id'),
              },
            ],
          } as SocialAuthServiceConfig,
        }
      ],
      .....................
Thank You!
