import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import { HttpClient } from '@angular/common/http';

import * as DhhdashboardActions from '../store/dhhdashboard.actions';


export class DhhdashboardEffects {
    private httpOptions;
    @Effect()
    scheduleFetch = this.actions$
        .ofType(DhhdashboardActions.FETCH_SCHEDULE)
        .switchMap((action: DhhdashboardActions.FetchSchedule) => {
            return this.http.get('api/schedules', this.httpOptions);
        })
        .subscribe(value => {
            return{
                type: DhhdashboardActions.FETCH_SCHEDULE,
                payload: value,
            };
        });

    constructor(private actions$: Actions, private http: HttpClient) {
    }

}
