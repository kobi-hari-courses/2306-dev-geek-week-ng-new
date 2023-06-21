import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MY_NUMBER } from './components/token/number.token';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CheatingDirective } from './directives/cheating.directive';
import { MyButtonComponent } from './components/my-button/my-button.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: MY_NUMBER,
      useValue: 42,
    },
  ],
};

export const commonStuff = [
  FirstComponent,
  SecondComponent,
  HighlightDirective,
  CheatingDirective,
  MyButtonComponent
];
