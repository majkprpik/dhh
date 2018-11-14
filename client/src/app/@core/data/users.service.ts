import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class UserService {

  private httpOptions;

  constructor(private http: HttpClient, private authService: NbAuthService) {
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        this.httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: token.getValue(),
          }),
        };
      }
    });
  }

  getCurrentUser(): Observable<any> {
    return this.http.get('api/users/current', this.httpOptions);
  }

  getUsers(): Observable<any> {
    return this.http.get('api/users', this.httpOptions);
  }
}
