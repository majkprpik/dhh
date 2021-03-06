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
import { NewShift } from '../../../models/newShift.model';
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
    @Effect()
    addShift = this.actions$
        .ofType(ShiftsActions.TRY_ADD_SHIFT)
        .map((action: ShiftsActions.TryAddShift) => {
            return { payload: action.payload, resolver: action.resolver };
        })
        .switchMap((value) => {
            value.resolver();
            return this.shiftService.createShift(value.payload);
        })
        .map((shift: NewShift) => {
            return {
                type: ShiftsActions.ADD_SHIFT,
                payload: shift,
            };
        });
    @Effect()
    updateShift = this.actions$
        .ofType(ShiftsActions.TRY_UPDATE_SHIFT)
        .map((action: ShiftsActions.TryUpdateShift) => {
            return action.payload;
        })
        .switchMap((shift: {id: number, updatedShift: NewShift}) => {
            return this.shiftService.updateShift(shift.updatedShift);
        })
        .map((shift) => {
            return {
                type: ShiftsActions.UPDATE_SHIFT,
                payload: shift,
            };
        });
    @Effect()
    deleteShift = this.actions$
        .ofType(ShiftsActions.TRY_DELETE_SHIFT)
        .map((action: ShiftsActions.TryDeleteShift) => {
            return action.payload;
        })
        .switchMap((shift: {id: number, deletedShift: NewShift}) => {
            return this.shiftService.deleteShift(shift.deletedShift);
        })
        .map((shift) => {
            return {
                type: ShiftsActions.DELETE_SHIFT,
                payload: shift,
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
