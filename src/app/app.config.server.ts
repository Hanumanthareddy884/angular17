import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { oktaAuthFactory } from './okta-config';
import { OKTA_CONFIG } from '@okta/okta-angular';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    { provide: OKTA_CONFIG, useFactory: oktaAuthFactory }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
