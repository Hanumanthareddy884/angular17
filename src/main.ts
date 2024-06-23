import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {oktaConfig} from './app/okta-config'
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
