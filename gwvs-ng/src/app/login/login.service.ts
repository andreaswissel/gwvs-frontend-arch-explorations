import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login(username: string, password: string): Observable<boolean> {
    return new Observable<boolean>((observer) => observer.next(true));
  }
}
