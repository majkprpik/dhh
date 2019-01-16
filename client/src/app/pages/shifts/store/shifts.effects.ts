import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
// import { fromPromise } from 'rxjs/observable/fromPromise';
import { ShiftService } from '../../../services/shifts/shift.service';
import * as ShiftsActions from './shifts.actions';
import { Shift } from '../../../models/shift.model';
@Injectable()
export class ShiftsEffects {
    @Effect()
    fetchShifts = this.actions$
        .ofType(ShiftsActions.FETCH_SHIFT)
        .switchMap((action: ShiftsActions.FetchShift) => {
            return this.shiftService.getShifts();
        })
        .map((shifts) => {
            return {
                type: ShiftsActions.SET_SHIFTS,
                payload: shifts,
            };
        });
    @Effect({dispatch: false})
    storeShifts = this.actions$
        .ofType(ShiftsActions.STORE_SHIFT)
        .withLatestFrom(this.store.select('SHIFTS'))
        .switchMap(([action, state]) => {
            return this.shiftService.createShift(state.shifts);
        });
    constructor(private shiftService: ShiftService, private actions$: Actions,
        private store: Store<{ SHIFTS: { shifts: Shift[] } }>) {
    }
}
