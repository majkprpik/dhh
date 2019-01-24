import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';

import * as DhhdashboardActions from '../store/dhhdashboard.actions';
import { HandsontableService } from '../../../services/schedule/schedule.service';
import { Schedule } from '../../../models/schedule.model';

@Injectable()
export class DhhdashboardEffects {
    @Effect()
    scheduleFetch = this.actions$
        .ofType(DhhdashboardActions.FETCH_SCHEDULE)
        .switchMap((action: DhhdashboardActions.FetchSchedule) => {
            return this.handsontableService.getSchedule();
        })
        .map((schedule) => {
            return {
                type: DhhdashboardActions.SET_SCHEDULE,
                payload: schedule,
            };
        });

    constructor(private handsontableService: HandsontableService, private actions$: Actions,
        store: Store<{ DHHDASHBOARD: { schedules: Schedule[] } }>) {
    }

}
