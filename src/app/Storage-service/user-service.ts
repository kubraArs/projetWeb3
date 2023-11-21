
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  constructor() {}

  login() {
    this.isLoggedIn.next(true);
  }

  logout() {
    this.isLoggedIn.next(false);
  }

  get isLoggedIn$() {
    return this.isLoggedIn.asObservable();
  }
}
