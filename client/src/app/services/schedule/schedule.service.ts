import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class HandsontableService {

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

  getSchedule(): Observable<any> {
    return this.http.get('api/schedules', this.httpOptions);
  }

  updateSchedule(schedule): Observable<any> {
    if (schedule != null) {
      return this.http.patch('api/schedules/' + schedule._id, { schedule: schedule }, this.httpOptions);
    }
  }
  deleteSchedule(schedule): Observable<any> {
    if (schedule != null) {
      return this.http.delete('api/schedules/' + schedule._id, this.httpOptions);
    }
  }
  deleteSchedules(schedule): Observable<any> {
    if (schedule != null) {
      return this.http.delete('api/schedules/', this.httpOptions);
    }
  }
  createSchedule(schedule): Observable<any> {
    if (schedule != null) {
      return this.http.post('api/schedules/', schedule, this.httpOptions);
    }
  }
}
