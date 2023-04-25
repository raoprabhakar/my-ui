import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

qnty = new BehaviorSubject(0);
incr = 0;
  constructor() { }

  addQnty = () => {
    this.qnty.next(++this.incr)
    return this.qnty.asObservable();
  }

  removeQnty = () => {
    this.qnty.next(--this.incr)
    return this.qnty.asObservable();
  }

}
