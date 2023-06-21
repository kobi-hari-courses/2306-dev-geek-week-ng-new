import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, combineLatest, debounceTime, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals-demo.component.html',
  styleUrls: ['./signals-demo.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsDemoComponent {
  first = signal('Manchester');
  second = signal('City');
  fullName = computed(() => `${this.first()} ${this.second()}`);
  ef = effect(() => console.log(this.fullName()));

  // first$ = new BehaviorSubject('Manchester');
  // second$ = new BehaviorSubject('City');

  // fullName$ = combineLatest([this.first$, this.second$]).pipe(
  //   map(([first, second]) => `${first} ${second}`)
  // );

  constructor() {
    // this.fullName$.pipe(
    //   takeUntilDestroyed(), 
    //   debounceTime(0)
    // ).subscribe(val => console.log(val))

  }

  onClick() {
    // this.second$.next('United');
    // this.first$.next('Leads');

    this.second.set('United');
    this.first.set('Leads');
  }

}
