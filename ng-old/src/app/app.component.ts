import { Component } from '@angular/core';
import { ConfigurationService } from './demos/configuration.service';
import { MockService } from './demos/mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
  providers: [
    {
      provide: ConfigurationService, 
      useClass: MockService
    }
  ]
})
export class AppComponent {
  title = 'ng-old';
}
