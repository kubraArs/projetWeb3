import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public _sideNavStatus = new BehaviorSubject<boolean>(false);
  sideNavStatus$ = this._sideNavStatus.asObservable();

  setSideNavStatus(status: boolean) {
    this._sideNavStatus.next(status);
  }
}
