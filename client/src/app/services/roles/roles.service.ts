import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class RolesService {

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

    getData2(): Observable<any> {
        return this.http.get('api/users/', this.httpOptions);
    }
    getRoles(): Observable<any> {
        return this.http.get('api/roles', this.httpOptions);
    }

    updateUser(user): Observable<any> {
        if (user != null) {
            return this.http.patch('api/users/' + user._id, { user: user }, this.httpOptions);
        }
    }
}
