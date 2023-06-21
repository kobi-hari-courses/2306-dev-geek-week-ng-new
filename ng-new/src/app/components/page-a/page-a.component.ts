import { Component, ENVIRONMENT_INITIALIZER, EnvironmentInjector, createEnvironmentInjector, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MY_NUMBER } from '../token/number.token';

@Component({
  selector: 'app-page-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.scss']
})
export class PageAComponent {
  myNumber = inject(MY_NUMBER);
  injector = inject(EnvironmentInjector);
  

  doSomething() {
    createEnvironmentInjector([
      {provide: ENVIRONMENT_INITIALIZER, useValue: () => console.log('Eyze Yofi'), multi: true}
    ], this.injector);
  }

}
