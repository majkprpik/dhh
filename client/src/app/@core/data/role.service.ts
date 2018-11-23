import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class RoleService {

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

  getRole(): Observable<any> {
    return this.http.get('api/roles', this.httpOptions);
  }

  updateUser(role): Observable<any> {
    if (role != null) {
      return this.http.put('api/roles/update' + role._id, { role: role }, this.httpOptions);
    }
  }
  deleteUser(role): Observable<any> {
    if (role != null) {
      return this.http.post('api/roles/remove' + role._id, this.httpOptions);
    }
  }
  createRole(role): Observable<any> {
    if (role != null) {
      return this.http.post('api/roles/add', role, this.httpOptions);
    }
  }
}
