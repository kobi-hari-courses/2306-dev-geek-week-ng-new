import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-b',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.scss']
})
export class PageBComponent {
  // private route = inject(ActivatedRoute);
  // a = Number(this.route.snapshot.data['a']);
  // b$ = this.route.data.pipe(
  //   map(data => Number(data['b']))
  // );

  @Input() a?: number;
  @Input() b?: number;
  @Input() c?: number;

}
