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

  updateUser(user): Observable<any> {
    if (user != null) {
      return this.http.patch('api/users/' + user._id, user, this.httpOptions);
    }
  }
  deleteUser(user): Observable<any> {
    if (user != null) {
      return this.http.delete('api/users/' + user._id, this.httpOptions);
    }
  }
  createUser(user): Observable<any> {
    if (user != null) {
      return this.http.post('api/users/', user, this.httpOptions);
    }
  }
}
