import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { commonStuff } from './app.config';
import { DialogService } from './services/dialog.service';
import { MY_NUMBER } from './components/token/number.token';
import { MatTabsModule } from '@angular/material/tabs';
import { MyLinkDirective } from './directives/my-link.directive';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterModule, commonStuff, MatTabsModule, MyLinkDirective]
})
export class AppComponent {
  title = 'ng-new';
  dialogs = inject(DialogService);
  myNumber = inject(MY_NUMBER);

  auth = inject(AuthService);
  isLoggedIn$ = this.auth.getStatus();

  toggle() {
    this.auth.toggleStatus();
  }

  onOpen() {
    this.dialogs.openMyDialog();
  }
}
