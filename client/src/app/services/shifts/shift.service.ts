import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class ShiftService {

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
    updateShift(shift): Observable<any> {
        if (shift != null) {
          return this.http.patch('api/shifts/' + shift._id, { shift: shift }, this.httpOptions);
        }
      }
    deleteShift(shift): Observable<any> {
        if (shift != null) {
          return this.http.delete('api/shifts/' + shift._id, this.httpOptions);
        }
      }
    createShift(shift): Observable<any> {
        if (shift != null) {
          return this.http.post('api/shifts/', shift, this.httpOptions);
        }
      }
}
