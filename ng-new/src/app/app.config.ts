import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { MY_NUMBER } from './components/token/number.token';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CheatingDirective } from './directives/cheating.directive';
import { MyButtonComponent } from './components/my-button/my-button.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    {
        provide: MY_NUMBER,
        useValue: 42,
    },
    provideAnimations(), 
    importProvidersFrom(MatDialogModule)
],
};

export const commonStuff = [
  FirstComponent,
  SecondComponent,
  HighlightDirective,
  CheatingDirective,
  MyButtonComponent
];
