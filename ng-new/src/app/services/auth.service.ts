import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private isLoggedIn$ = new BehaviorSubject(this.isLoggedIn);

  getStatus(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

  setStatus(val: boolean) {
    this.isLoggedIn = val;
    this.isLoggedIn$.next(this.isLoggedIn);
  }

  toggleStatus() {
    this.isLoggedIn = !this.isLoggedIn;
    this.isLoggedIn$.next(this.isLoggedIn);
  }

  constructor() { }
}
