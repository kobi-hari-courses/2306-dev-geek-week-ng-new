import { Directive } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatTabLink } from '@angular/material/tabs';

@Directive({
  selector: '[myLink]',
  standalone: true, 
  hostDirectives: [
    RouterLinkActive, 
    {
      directive: RouterLink, 
      inputs: [
        'routerLink: myLink'
      ]
    }
  ]
})
export class MyLinkDirective {

  constructor(
    private rla: RouterLinkActive,
    private tabLink: MatTabLink
    ) {
    rla.isActiveChange.pipe(
      takeUntilDestroyed()
    ).subscribe(val => {
      tabLink.active = val;
    })
  }

}
