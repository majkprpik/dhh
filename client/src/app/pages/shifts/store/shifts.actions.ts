import { Action } from '@ngrx/store';
import { NewShift } from '../../../models/NewShift.model';

export const SET_SHIFTS = 'SET_SHIFTS';
export const ADD_SHIFT = 'ADD_SHIFT';
export const TRY_ADD_SHIFT = 'TRY_ADD_SHIFT';
export const UPDATE_SHIFT = 'UPDATE_SHIFT';
export const TRY_UPDATE_SHIFT = 'TRY_UPDATE_SHIFT';
export const DELETE_SHIFT = 'DELETE_SHIFT';
export const TRY_DELETE_SHIFT = 'TRY_DELETE_SHIFT';
export const FETCH_SHIFT = 'FETCH_SHIFT';
export const STORE_SHIFT = 'STORE_SHIFT';

export class SetShifts implements Action {
    readonly type = SET_SHIFTS;

    constructor(public payload: NewShift[]) {}
  }
export class AddShift implements Action {
    readonly type = ADD_SHIFT;
    constructor(public payload: NewShift) {
    }
}
export class TryAddShift implements Action {
    readonly type = TRY_ADD_SHIFT;
    constructor(public payload: NewShift, public resolver: () => void) {
    }
}
export class UpdateShift implements Action {
    readonly type = UPDATE_SHIFT;
    constructor(public payload: {id: number, updatedShift: NewShift}) {
    }
}
export class TryUpdateShift implements Action {
    readonly type = TRY_UPDATE_SHIFT;
    constructor(public payload: {id: number, updatedShift: NewShift}) {
    }
}
export class DeleteShift implements Action {
    readonly type = DELETE_SHIFT;
    constructor(public payload: {id: number, deletedShift: NewShift} )  {
    }
}
export class TryDeleteShift implements Action {
    readonly type = TRY_DELETE_SHIFT;
    constructor(public payload: {id: number, deletedShift: NewShift} ) {
    }
}
export class FetchShift implements Action {
    readonly type = FETCH_SHIFT;
}

export class StoreShift implements Action {
    readonly type = STORE_SHIFT;
}
export type ShiftsActions = SetShifts | AddShift | UpdateShift | DeleteShift | FetchShift |
 StoreShift | TryAddShift | TryUpdateShift | TryDeleteShift;
