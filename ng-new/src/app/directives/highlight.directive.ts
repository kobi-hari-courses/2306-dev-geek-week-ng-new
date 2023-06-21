import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'h1',
  standalone: true
})
export class HighlightDirective {
  @HostBinding('style.background')
  color = 'yellow';

  constructor() { }

}
