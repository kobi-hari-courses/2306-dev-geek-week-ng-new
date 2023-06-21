import { Routes } from '@angular/router';
import { MY_NUMBER } from './components/token/number.token';
import { ENVIRONMENT_INITIALIZER } from '@angular/core';
import { PageCComponent } from './components/page-c/page-c.component';
import { authGuard } from './guards/auth.guard';
import { SignalsDemoComponent } from './components/signals-demo/signals-demo.component';


export const routes: Routes = [
  { path: '', redirectTo: 'page-a', pathMatch: 'full' },
  {
    path: 'page-a',
    loadComponent: () => import('./components/page-a/page-a.component')
                      .then(m => m.PageAComponent),
    providers: [
        { provide: MY_NUMBER, useValue: 100 },
    ],
  },
  {
    path: 'page-b',
    canActivate: [authGuard],
    data: {
      c: 200
    },
    resolve: {
      a: () => 60,
      b: () => new Promise(res => setTimeout(res, 2000)).then(_ => 100)
    },

    loadComponent: () => import('./components/page-b/page-b.component')
                  .then(m => m.PageBComponent) ,
    providers: [
      {
        provide: ENVIRONMENT_INITIALIZER,
        useValue: async () => {
            console.log('started init');
            await new Promise(res => setTimeout(res, 3000));
            console.log('completed init');
        },
        multi: true
      },
    ],
  },
  {
    path: 'page-c', component: PageCComponent, 
    loadChildren: () => import('./components/page-c/page-c-routes').then()
  }, 
  {

    path: 'signals', component: SignalsDemoComponent
  }
];
