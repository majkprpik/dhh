import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class ShiftsService {

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

  getShifts(): Observable<any> {
    return this.http.get('api/shifts', this.httpOptions);
  }
  addShifts(): Observable<any> {
    return this.http.get('api/shifts/add', this.httpOptions);
  }
  deleteShifts(): Observable<any> {
    return this.http.get('api/shifts/remove', this.httpOptions);
  }
  updateShifts(): Observable<any> {
    return this.http.get('api/shifts/update', this.httpOptions);
  }
}
