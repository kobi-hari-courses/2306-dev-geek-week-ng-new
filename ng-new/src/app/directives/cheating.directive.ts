import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'img',
  standalone: true
})
export class CheatingDirective {

  @HostBinding('attr.title')
  @Input({required: true})
  src!: string;

  constructor() { }

}
