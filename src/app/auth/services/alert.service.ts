import { Injectable } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterRouteChange = false;

  constructor (private router: Router){
    // allow subscribing to alerts observable
    this.router.events.subscribe
    (event => {
      if (event instanceof NavigationStart){
        if (this.keepAfterRouteChange) {
          //only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear alert message
          this.clear();
        }
      }
    });
  }
  onAlert(): Observable<any> {
    return this.subject.asObservable();
  }
  // convenience methods
  success(message: string, keepAfterRouteChange = false){
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({  type: 'success', text: message });
  }
  error(message: string, keepAfterRouteChange = false){
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'error', text: message});
  }
  clear() {
    this.subject.next;
  }
}
